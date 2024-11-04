import React from 'react'
import './Explore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faCar, faTv } from '@fortawesome/free-solid-svg-icons'




const Explore = () => {
  return (
    <div className="explore-info">
      <div className="infos">
        <div className="left-content-box">
          <p className='p1'>EINZIGARTIGEN</p> 
          <p className='p2'>UNTERKÜNFTE</p>
        </div>
        <div className="right-content-box">
          <p>Entdecken Sie zwei unterschiedliche Apartments:</p>
          <ul className='Apatment-rev'>
            <li>
              Apartment 1 (120 qm): Geräumig und luxuriös, mit einer Mischung 
              aus modernen Annehmlichkeiten und traditioneller afrikanischer Dekoration. 
              Ideal für Familien und Gruppen bis zu 7 Personen.
            </li>
            <li>
              Apartment 2 (35 qm): Intim und gemütlich, geschmückt mit afrikanisch inspirierten 
              Akzenten, perfekt für Paare oder kleine Familien bis zu 3 Personen.
            </li>
          </ul>
          
        </div>
      </div>
      <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faWifi} size='4x'/>
          <p>Hochgeschwindigkeits-Wifi</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCar} size='4x'/>
          <p>Tragbarer Parkplatz</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faTv} size='4x'/>
          <p><span>Maximal</span>Unterhaltung</p>
        </div>
      </div>
    </div>
  )
}

export default Explore
