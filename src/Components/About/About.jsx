import React from 'react'
import './About.css'
import image22 from '../../assets/w22.jpg';
import image8 from '../../assets/img8.jpg';
import { Link } from 'react-scroll';


function About() {
  return (
    <div className="accommodation-container" id='about'>
      
      <div className="section location-section">
        <img src={image22} alt="Location view" className="background-image" />
        <div className="content">
          <h2 className="section-title">LAGE</h2>
          <p>Zur Little Afrika“ befindet sich in der Mindener Straße 1, bei der Kreuzung Mindener/Bergkirchener Straße in Minden/Häverstädt und es ist daher leicht zu finden.</p>
          <p>Es liegt in einer ruhigen Wohngegend, umgeben von schönen Bergen, Wandermöglichkeiten durch die Berge, Radwege und grünen Feldern (entspannende Spaziergänge mit dem Hund). Der nahegelegene „Porta Markt“ bietet zahlreiche Einkaufsmöglichkeiten, Apotheken, Restaurants sowie kulturelle Sehenswürdigkeiten.</p>
          <p>Die Lage ist ideal für Reisegruppen, Studenten-WGs, Montageteams und Urlauber. Die Mindener Innenstadt ist etwa 10 Minuten entfernt und Einkaufsmöglichkeiten sowie Sehenswürdigkeiten wie das Kaiser Wilhelm Denkmal sind in der Nähe. Freizeitmöglichkeiten wie der Potts Park und verschiedene Wanderwege bieten sich ebenfalls an. Das Johannes Wesling Klinikum ist unmittelbar erreichbar.</p>
          <p>Eine Bushaltestelle direkt vor der Haustür sorgt für eine bequeme Verkehrsanbindung. Parkmöglichkeiten für Autos und Lkw sind vorhanden.</p>
        </div>
      </div>

      
      <div className="section accommodation-section">
        <img src={image8} alt="Accommodation interior" className="background-image" />
        <div className="content">
          <h2 className="section-title">UNTERKUNFTSBESCHREIBUNG</h2>
          <p>Die Ferienwohnung besticht durch ihre einzigartige Inneneinrichtung, die durch eine Mischung aus modernen und traditionellen Afrikanischen Elementen geprägt ist und eine warme und einladende Atmosphäre schafft. Diese charmante Unterkunft bietet auf 35qm sowie auf 120qm Wohnfläche, einen Platz für bis zu 15 Gäste an und in Absprache können auch zusätzliche Schlafmöglichkeiten bereitgestellt werden.</p>
          <h3>Wohnung 1: 120 qm</h3>
          <ul>
            <li>Insgesamt 5 Schlafzimmern: Verschiedene Konfigurationen mit Doppel- und Einzelbetten.</li>
            <li>Eine Gemeinschaftsküche mit allen notwendigen Küchengeräten, darunter eine Kaffeemaschine.</li>
            <li>Der Wohnzimmer verfügt über einen TV, und ein großzügiges Badezimmer mit Dusche und Badewanne.</li>
          </ul>

          <h3>Wohnung 2: 35 qm</h3>
          <ul>
            <li>1 Schlafzimmer mit 2 Einzelbetten.</li>
            <li>Wohnzimmer mit Schlafsofa, Sessel und TV.</li>
            <li>Küche mit notwendigen Küchengeräten, darunter eine Kaffeemaschine.</li>
            <li>Badezimmer mit Dusche.</li>
          </ul>

          <p><strong>Weitere Annehmlichkeiten:</strong> Bettwäsche und Handtücher inklusive, kostenloses WLAN, Waschmaschine, Trockner und Möglichkeit für Selbstversorgung.</p>
          <p>Verbringen Sie Ihren nächsten Urlaub in der Ferienwohnung Zur Little Afrika und genießen Sie die Gastfreundschaft und den Komfort, den diese Unterkunft zu bieten hat. Wir freuen uns auf Ihren Besuch.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
