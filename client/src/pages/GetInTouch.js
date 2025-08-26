import React from 'react';

const GetInTouch = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <h2>Get in Touch</h2>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: 40, margin: '0 1rem' }} />
    </a>
    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: 40, margin: '0 1rem' }} />
    </a>
    <a href="mailto:someone@example.com">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email" style={{ width: 40, margin: '0 1rem' }} />
    </a>
  </div>
);

export default GetInTouch;
