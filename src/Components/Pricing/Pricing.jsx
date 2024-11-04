import React from 'react'
import { Link } from "react-scroll";
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import './Pricing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

function Pricing() {
  return (
    <div id="pricing" className="pricing-section">
      <h1 className="pricing-title">UNSERE PREISE</h1>
        <div className="pricing-cards">
        <div className="pricing-card">
            <div className="info-style">
              <h2>Wohnung 1</h2>
              <p>ab 175€/Übernachtung</p>
            </div>
          <img src={img6} alt="Apartment 1" className="pricing-image" />
          <div className="pricing-info">  
            <p>Bis zu 13 Gäste, zusätzliche Kosten für zusätzliche Gäste</p>
            <Link to="booking" smooth={true} duration={500}>
              <button className="book-button">Jetzt buchen</button>
            </Link>
          </div>
        </div>
        <div className="pricing-card">
            <div className="info-style">
              <h2>Wohnung 2</h2>
              <p>ab 48 € / Übernachtung</p>
            </div>
          <img src={img7} alt="Apartment 2" className="pricing-image" />
          <div className="pricing-info">
            <p>Bis zu 4 Gäste, zusätzliche Kosten für zusätzliche Gäste</p>
            <Link to="booking" smooth={true} duration={500}>
              <button className="book-button">Jetzt buchen</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="additional-charges">
        <h3>Zusätzliche Gebühren</h3>
        <div className="charge-item">
          <h4>Kaution</h4>
          <p>Übrigens Kaution für die Dauer des Aufenthalts beträgt 100 € (wird zurückerstattet, wenn alles intakt bleibt).</p>
        </div>
        <div className="charge-item">
          <h4>
            <FontAwesomeIcon icon={faDog} size='4x' className="dog-icon"/> Gebühr für Haustiere
          </h4>
          <p>
            Hunde können für 7,50 €/Hund/ Nacht übernachten wenn Sie es mitbringen möchten und Übernachtungskörbchen wird bereitgestellt.
            
          </p>
        </div>
        <div className="charge-item">
          <h4>Endreinigung</h4>
          <p>Die Endreinigung kostet 100 € ohne Hund und mit Hund - 150 €</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing