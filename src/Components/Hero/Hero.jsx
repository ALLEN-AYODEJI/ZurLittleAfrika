import React, { useState, useEffect } from 'react';
import './Hero.css'
import { Link } from "react-scroll";
import img24 from '../../assets/img24.jpg'
import img15 from '../../assets/img15.jpg'
import img16 from '../../assets/img16.jpg'
import img18 from '../../assets/img18.jpg'


const images = [
 img24,img15,img16,img18
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="hero">
      <div
        className="background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="overlay">
          <p>WILLKOMMEN IN</p>
          <h2>ZUR</h2>
          <h1>LITTLE AFRIKA</h1>
          <p>"Ihr Tor zu Luxus und Komfort"</p>
          <Link to="booking" smooth={true} duration={500}>
           <button className='btn-wh'>JETZT BUCHEN</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero
