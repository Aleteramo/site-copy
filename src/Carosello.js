// Carosello.js
import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

import immagine1 from './immagini2/immagine1.jpg';
import immagine2 from './immagini2/immagine2.jpg';
import immagine3 from './immagini2/immagine3.jpg';
import immagine4 from './immagini2/immagine4.jpg';
import immagine5 from './immagini2/immagine5.jpg';

const CaroselloImage = ({ src, alt, index }) => {
  const [style, api] = useSpring(() => ({
    scale: 1,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    config: { mass: 1, tension: 210, friction: 20 },
  }));

  return (
    <Link to={`/dettaglio/${index}`}>
      <animated.img
        src={src}
        alt={alt}
        onMouseEnter={() => api.start({ scale: 1.1, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.5)' })}
        onMouseLeave={() => api.start({ scale: 1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' })}
        style={{
          transform: style.scale.to(scale => `scale(${scale})`),
          boxShadow: style.boxShadow,
        }}
        className="carosello-immagine"
      />
    </Link>
  );
};

const immagini = [immagine1, immagine2, immagine3, immagine4, immagine5];

const Carosello = () => {
  const caroselloRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (caroselloRef.current) {
      observer.observe(caroselloRef.current);
    }

    return () => {
      if (caroselloRef.current) {
        observer.unobserve(caroselloRef.current);
      }
    };
  }, []);

  return (
    <div ref={caroselloRef} className="carousel-container">
      {immagini.map((src, index) => (
        <CaroselloImage key={index} src={src} alt={`Immagine ${index + 1}`} index={index} />
      ))}
    </div>
  );
};

export default Carosello;