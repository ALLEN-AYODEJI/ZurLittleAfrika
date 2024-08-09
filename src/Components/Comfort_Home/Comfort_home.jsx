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
            <h2>KOMFORT UND BEQUEMLICHKEIT</h2>
            <p>Jede Wohnung ist ausgestattet mit:</p>
            <ul>
              <li>Voll ausgestattete Küchen inklusive Geschirrspüler und Kaffeemaschine.</li>
              <li>Unterhaltungsmöglichkeiten wie Fernseher und kostenloses WLAN.</li>
              <li>Außenbereiche mit Gärten und Grillplätzen für entspannte Abende.</li>
            </ul>
          </div>
        </div>
        <div className="image-text-container2">
          <div className="head">
            <h2><span>IHR ZUHAUSE </span>WEG VON ZUHAUSE</h2>
          </div>
          <div className="image-text-container3">
            <img src={img1} alt="Comfort & Convenience" className="image1" />
            <p className='cont-list'>Genießen Sie Annehmlichkeiten wie:</p>
            <ul className='cont-list'>
              <li>Waschmaschinen und Trockner für zusätzlichen Komfort</li>
              <li>Kostenlose Parkplätze stehen vor Ort zur Verfügung</li>
              <li>Geeignet für Langzeitmieter, Familien, Urlauber und Geschäftsreisende 
                gleichermaßen.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comfort_home
