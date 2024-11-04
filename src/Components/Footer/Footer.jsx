import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';


function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-section">
              <h2>TELEFONUNTERSTÜTZUNG</h2>
              <p>Reservierungsanfragen können per Telefonanruf oder
                 Nachricht gestellt werden:</p>
              <p className="phone-number">015111231065</p>
            </div>
            <div className="footer-section">
              <h2>ADRESSE</h2>
              <p>Mindener Straße 1</p>
              <p>32429 Minden</p>
              <p>Nordrhein Westfalen</p>
              <p>Deutschland</p>
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