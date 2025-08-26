# Saiteja

Static frontend served by a minimal Express backend with optional Azure AD login.

What this repo contains:
- `client/public` – static HTML/CSS/JS frontend (professional theme)
- `server` – lightweight Express server that serves static files and provides Azure AD login routes

Quick start

1. Install server dependencies from the `server` folder:

	npm install

2. Add Azure credentials in `server/.env` (optional if not using login):

	AZURE_TENANT_ID=
	AZURE_CLIENT_ID=
	AZURE_CLIENT_SECRET=

3. Run the server:

	node server/index.js

View the site at `http://localhost:5000`.

Notes
- The `client/public` folder is the source of truth for frontend pages. Delete `client/html` if present.
- Azure login requires configuring an app registration in Azure AD and populating `server/.env`.

If you want help enabling GitHub Pages or an automatic deploy pipeline, I can set that up.
