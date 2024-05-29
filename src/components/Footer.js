// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-3">
      <div className="container">
      <Link to="/">
          <img src="/constructionbutton.png" alt="Company Logo" style={{ width: '115px', height: 'auto' }} />
        </Link>
        <p>© 2024 JJR Construction Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
