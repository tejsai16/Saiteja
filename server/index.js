require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

const app = express();
app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

app.use(express.static(path.join(__dirname, '../client/public')));

// Protect downloads folder
app.use('/downloads', ensureAuthenticated, express.static(path.join(__dirname, '../client/public/downloads')));

// Protect gallery folder
app.use('/gallery', ensureAuthenticated, express.static(path.join(__dirname, '../client/public/gallery')));
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new OIDCStrategy({
  identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/v2.0/.well-known/openid-configuration`,
  clientID: process.env.AZURE_CLIENT_ID,
  responseType: 'code',
  responseMode: 'query',
  redirectUrl: 'http://localhost:5000/auth/openid/return',
  allowHttpForRedirectUrl: true,
  clientSecret: process.env.AZURE_CLIENT_SECRET,
  validateIssuer: false,
  passReqToCallback: false,
  scope: ['profile', 'email', 'openid']
}, (iss, sub, profile, accessToken, refreshToken, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get('/login', passport.authenticate('azuread-openidconnect'));
app.get('/auth/openid/return',
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(5000, () => {
  console.log('Server running with Azure AD login on port 5000');
});
