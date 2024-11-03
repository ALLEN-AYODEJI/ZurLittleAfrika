import React from 'react'
import './About_me.css'
import me from '../../assets/me.jpg'

const About_me = () => {
  return (
    <section className="about-me">
      <div className="about-me-image">
        <img src={me} alt="Founder" />
      </div>
      <div className="about-me-content">
        <h2>ÜBER DIE GASTGEBERIN</h2>
        <p>
          Meine Name ist Felicia Olumat-Glaser und bin 1965 geboren. Ich komme ursprünglich aus Nigeria in West Afrika und lebe 
          seit 24 Jahren in Deutschland. ich bin reichlich beschenkt mit 3 Kindern: Praise, Prince and Prudenz und 3 Haustiere: 
          2 Katzen - Karl (Orientalische Kurzhaar - Männlich), Kate (Siam - Weibchen) und  1 Hund - Kimmy (Königspudel - Weibchen). 
          Ich arbeite seit ca. 9 Jahre in einer Zentralen Unterbringungseinrichtung für Flüchtlinge und Liebe meinen Job sehr weil ich 
          gerne mit Menschen arbeite.
        </p>
        <p>
          Seit einigen Jahren vermiete ich auch eine Ferienwohnung in unserem Haus, um Menschen aus aller Welt willkommen zu heißen und
          ihnen einen angenehmen Aufenthalt zu bieten. Als Gastgeberin lege ich großen Wert darauf, dass sich meine Gäste wie zu Hause 
          fühlen und sich rundum wohl fühlen.
        </p>
        <p>
          Ich bin immer für meine Gäste da, um ihnen bei Fragen und Wünschen zur Seite zu stehen. Ich gebe gerne Tipps für Ausflüge in die
          Umgebung, Restaurants und Sehenswürdigkeiten. Meine Ferienwohnung ist gemütlich und liebevoll eingerichtet, sodass sich meine Gäste
          entspannen und erholen können.
        </p>
        <p>
          Ich liebe es, neue Menschen kennenzulernen und ihre Geschichten zu hören. Es bereitet mir Freude, meine Kultur und Lebensweise mit 
          meinen Gästen zu teilen und ihnen einen Einblick in mein Leben zu geben.
        </p>
        <p>
          Mein Ziel ist es, dass meine Gäste einen unvergesslichen Aufenthalt bei mir haben und gerne wiederkommen. Ich freue mich darauf,
          Sie als Gast in meiner Ferienwohnung begrüßen zu dürfen und Ihnen einen unvergesslichen Aufenthalt zu bieten.
        </p>
      </div>
    </section>
  )
}

export default About_me