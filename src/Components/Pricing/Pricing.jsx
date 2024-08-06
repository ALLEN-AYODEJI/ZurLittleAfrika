import React from 'react'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import './Pricing.css'

function Pricing() {
  return (
    <div id="pricing" className="pricing-section">
      <h1 className="pricing-title">OUR PRICING</h1>
      <div className="pricing-cards">
      <div className="pricing-card">
          <div className="info-style">
            <h2>Apartment 1</h2>
            <p>€169 per night</p>
          </div>
        <img src={img6} alt="Apartment 1" className="pricing-image" />
        <div className="pricing-info">  
          <p>Up to 7 guests, additional charges for extra guests</p>
          <button className="book-button">Book Now</button>
        </div>
      </div>
      <div className="pricing-card">
          <div className="info-style">
            <h2>Apartment 2</h2>
            <p>€69 per night</p>
          </div>
        <img src={img7} alt="Apartment 2" className="pricing-image" />
        <div className="pricing-info">
          <p>Up to 2 guests, additional charges for extra guests</p>
          <button className="book-button">Book Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pricing