import React from 'react';
import './Gallery.css';
import image1 from '../../assets/w11.jpg';
import image2 from '../../assets/w12.jpg';
import image3 from '../../assets/w13.jpg';
import image4 from '../../assets/w14.jpg';
import image5 from '../../assets/w15.jpg';
import image6 from '../../assets/w16.jpg';
import image7 from '../../assets/w17.jpg';
import image8 from '../../assets/w18.jpg';
import image9 from '../../assets/w19.jpg';
import image10 from '../../assets/w120.jpg';
import image11 from '../../assets/w121.jpg';
import image12 from '../../assets/w122.jpg';
import image13 from '../../assets/w123.jpg';
import image14 from '../../assets/w21.jpg';
import image15 from '../../assets/w22.jpg';
import image16 from '../../assets/w23.jpg';
import image17 from '../../assets/w24.jpg';
import image18 from '../../assets/w25.jpg';
import image19 from '../../assets/w26.jpg';
import image20 from '../../assets/w27.jpg';
import image21 from '../../assets/w29.jpg';
import image22 from '../../assets/w210.jpg';
import image23 from '../../assets/w211.jpg';
import image24 from '../../assets/w212.jpg';
import image25 from '../../assets/w213.jpg';
import image26 from '../../assets/w214.jpg';


const imagesWohnung1 = [
  image1,  image3, image4,  image6, image7, image8, image10, image11, image12,
   image13, image2, image5, image9,
];

const imagesWohnung2 = [
  image14, image15, image16, image18, image21, image22, image23, 
   image26, image17, image19, image20, image24, image25,
]  

function Gallery() {
  return (
    <div className="gallery-section">
      <h1 className="gallery-title">GALERIE</h1>
      
      <div className="gallery-category">
        <h2>Wohnung 1</h2>
        <div className="gallery-grid">
          {imagesWohnung1.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Wohnung 1 - ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="gallery-category">
        <h2>Wohnung 2</h2>
        <div className="gallery-grid">
          {imagesWohnung2.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Wohnung 2 - ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
