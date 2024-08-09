import React, { useState, useEffect } from 'react';
import './Hero.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'


const images = [
 img1,img2,img3
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

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
          <button className='btn-wh'>JETZT BUCHEN</button>
        </div>
      </div>
    </div>
  );
};

export default Hero
