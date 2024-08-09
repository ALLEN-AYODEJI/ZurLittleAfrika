import React from 'react'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import './Pricing.css'

function Pricing() {
  return (
    <div id="pricing" className="pricing-section">
      <h1 className="pricing-title">UNSERE PREISE</h1>
      <div className="pricing-cards">
      <div className="pricing-card">
          <div className="info-style">
            <h2>Wohnung 1</h2>
            <p>169 € pro Nacht</p>
          </div>
        <img src={img6} alt="Apartment 1" className="pricing-image" />
        <div className="pricing-info">  
          <p>Bis zu 7 Gäste, zusätzliche Kosten für zusätzliche Gäste</p>
          <button className="book-button">Jetzt buchen</button>
        </div>
      </div>
      <div className="pricing-card">
          <div className="info-style">
            <h2>Wohnung 2</h2>
            <p>69 € pro Nacht</p>
          </div>
        <img src={img7} alt="Apartment 2" className="pricing-image" />
        <div className="pricing-info">
          <p>Bis zu 2 Gäste, zusätzliche Kosten für zusätzliche Gäste</p>
          <button className="book-button">Jetzt buchen</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pricing