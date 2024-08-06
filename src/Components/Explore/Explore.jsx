import React from 'react'
import './Explore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faCar, faTv } from '@fortawesome/free-solid-svg-icons'




const Explore = () => {
  return (
    <div className="explore-info">
      <div className="infos">
        <div className="left-content-box">
          <p className='p1'>EXPLORE</p> 
          <p className='p2'>OUR </p>
          <p className='p3'>UNIQUE </p>
          <p className='p4'>ACCOMODATIONS</p>
        </div>
        <div className="right-content-box">
          <p>Discover two distinct apartments:</p>
          <ul className='Apatment-rev'>
            <li>
              Apartment 1 (120 sqm): Spacious and luxurius, featuring  a mix
              of modern amenities and traditional African decoration. Ideal for families
              and groups up to 7 guests
            </li>
            <li>
                Apartment 2 (35 sqm): Intimate and cozy, adorned with African-inspired
                accents, perfect for couples or small families up to 2 guests.
            </li>
          </ul>
          
        </div>
      </div>
      <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faWifi} size='4x'/>
          <p>High Speed Wifi</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCar} size='4x'/>
          <p>Portable Parking Space</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faTv} size='4x'/>
          <p><span>Maximum</span> Entertainment</p>
        </div>
      </div>
    </div>
  )
}

export default Explore