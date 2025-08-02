// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} srishiva fashion designer. All rights reserved.</p>
        <p>@Web created by:sathya</p>
        <p>Contact:9361018536</p>
        <div className="footer-links">
          <Link to="/login1">AdminLogin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
