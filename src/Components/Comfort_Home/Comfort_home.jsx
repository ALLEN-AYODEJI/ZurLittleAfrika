import React from 'react'
import './Comfort_home.css'
import img1 from '../../assets/img1.jpg'
import img5 from '../../assets/img5.jpg'

function Comfort_home() {
  return (
    <div className="section-container">
      <div className="content">
        <div className="image-text-container">
          <img src={img5} alt="Comfort & Convenience" className="image" />
          <div className="text">
            <h2>COMFORT & CONVENIENCE</h2>
            <p>Each apartment is equipped with:</p>
            <ul>
              <li>Fully equipped kitchens including dishwashers and coffee machines.</li>
              <li>Entertainment options such as TVs and free WiFi.</li>
              <li>Outdoor spaces with gardens and barbecue areas for relaxing evenings.</li>
            </ul>
          </div>
        </div>
        <div className="image-text-container2">
          <div className="head">
            <h2><span>YOUR HOME </span>AWAY FROM HOME</h2>
          </div>
          <div className="image-text-container3">
            <img src={img1} alt="Comfort & Convenience" className="image1" />
            <p className='cont-list'>Enjoy amenities like:</p>
            <ul className='cont-list'>
              <li>Washing machines and dryers for added convenience</li>
              <li>Free parking available on-site</li>
              <li>Suitable for long-term rentals, families, vacationers, and business travelers alike.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comfort_home
