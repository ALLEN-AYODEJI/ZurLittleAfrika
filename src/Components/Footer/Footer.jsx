import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="LittleAfrika Logo" className='logo' />
          </div>
          <div className="footer-info">
            <div className="footer-section">
              <h2>PHONE SUPPORT</h2>
              <p>Reservation requests can be made by phone call or message:</p>
              <p className="phone-number">015111231065</p>
            </div>
            <div className="footer-section">
              <h2>ADDRESS</h2>
              <p>Mindener Straße 1</p>
              <p>32429 Minden</p>
              <p>North Rhine Westphalia</p>
              <p>Germany</p>
            </div>
          </div>
        </div>

        <div className="divider">
          
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>© Copyright 2024 - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
