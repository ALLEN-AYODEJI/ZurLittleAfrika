import React from 'react'
import './Comfort_home.css'
import img1 from '../../assets/img1.jpg'
import img5 from '../../assets/img5.jpg'
import img21 from '../../assets/img21.jpg'

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

        <div className="experience">
          <h2 className='head'>Erlebnisse und Sehenswürdigkeiten</h2>

          <p className="exp-write">
            Häverstädter Rundweg ist einen Regionaler Wanderweg die 11,34 km Lang ist.
            Der Rundweg verläfut über den Süd- zum Nordhang des Wiehengebirges.
            Wunderschöne Wanderstrecke im Wald,
            Wandern-Radfahren mit schönen Blicken auf den  Kaiser-Wilhelm-Denkmal
            (Eines der bedeutendsten Nationaldenkmäler Deutschlands und Wahrzeichen 
            der Stadt Porta Westfalica.-Das Kaiser-Wilhelm-Denkmal auf dem Wittekindsberg
            in 268 Meter Höhe gehört zu den bedeutendsten Nationaldenkmälern Deutschlands. 
            Es erinnert an Wilhelm I., König von Preußen (1797-1888) und seit 1871 Deutscher Kaiser), 
            Weser (Im Gasthaus "Zum Wilden Schmied" können Sie bei einer Pause eine traumhafte 
            Fernsicht in das Weserberglands). 
          </p>
          <div>
            <p className='exp-write'>Das Denkmal ist barrierefrei zugänglich</p>
            <p className='exp-write'>🏁 Sonstige Ausstattung/Einrichtung</p>  
            <li>WC-Anlage</li>
            <li>Am Parkplatz finden Sie öffentliche barrierefreie Toiletten</li>
            <li>🚘 Anreise & Parken</li>
            <p className='exp-write'>Ein großer kostenpflichtiger Besucherparkplatz befindet sich ca. 150m vom Denkmal entfernt</p>
          </div>

          <div className="porta">
            <img src={img21} alt='Horizon' className='horizon'/>
            <div className="porta_info">
              <li>Porta-Kanzel (die Porta-Kanzel ist eine steil nach Südwesten bis Westen abfallende Sandstein-Felsklippe des
               im Wesergebirge gelegenen Jakobsbergs. Zur touristischen Erschließung wurde eine Aussichtsplattform an der Portakanzel angelegt.
               Von der gibt es einen wunderschönen Blick auf die Porta Westfalica und das Kaiser-Wilhelm-Denkmal),</li>
              <li>Potts Park 
               (Freizeit- und Erlebnispark mit Science Center vornehmlich für Familien mit Kindern im Alter von bis zu 12 Jahren. Originell, 
               familienfreundlich, pädagogisch Am 28. Juni 1969 öffnete potts park als einer der erst Gelände einer ehemaligen Eisenerz-Zeche
               begann die Straßenbau tätig war, ein Freizeitzentrum zu bauen. als einer der ersten Freizeitparks in der Bundesrepublik seine Pfo
               Zeche begann die Firma Heinrich Pott, die damals Steinbrüche be eizeitzentrum zu bauen),</li>
              <li>Die Schachtschleuse Minden (wurde von 1911 bis 1914 im Rahmen des Baus des Mittellandkanals am Wasserstraßenkreuz Minden als Nordabstieg 
               zur Weser gebaut und stellt damit die kürzeste Verbindung zwischen Mittellandkanal und Weser her) u.a</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comfort_home
