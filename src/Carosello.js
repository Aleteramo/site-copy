import React, { useState, useEffect, useRef } from 'react'; // Aggiungi useRef qui
import { Link } from 'react-router-dom';

// Importa le immagini
import Autorialità from './immagini2/Autorialità.png';
import immagine2 from './immagini2/immagine2.jpg';
import immagine3 from './immagini2/immagine3.jpg';
import immagine4 from './immagini2/immagine4.jpg';
import immagine5 from './immagini2/immagine5.jpg';

// Definisci la variabile immagini come un array dei percorsi delle immagini importate
const immagini = [Autorialità, immagine2, immagine3, immagine4, immagine5];


const Carosello = () => {
  const caroselloRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [caroselloStartY, setCaroselloStartY] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Imposta la posizione di inizio del carosello al primo scroll che lo rende visibile
      if (caroselloRef.current && caroselloStartY === null) {
        const caroselloRect = caroselloRef.current.getBoundingClientRect();
        if (caroselloRect.top < window.innerHeight) {
          setCaroselloStartY(currentScrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [caroselloStartY]);

  const calculatePosition = (index) => {
    // Se caroselloStartY non è ancora stato impostato, mantieni le immagini fuori dalla viewport
    if (caroselloStartY === null) return window.innerWidth;

    // Calcola la posizione delle immagini basata sulla differenza tra scrollY e caroselloStartY
    const scrollOffset = scrollY - caroselloStartY;
    const movementSpeed = 8; // Regola la velocità di movimento delle immagini
    let position = window.innerWidth - (scrollOffset * movementSpeed) - (index * -50); // '100' è la distanza tra le immagini

    // Assicurati che le immagini non si muovano troppo a sinistra
    position = Math.max(position, -window.innerWidth * (index + 1));

    return position;
  };

  return (
    <div ref={caroselloRef} className="carousel-container">
      {immagini.map((src, index) => (
        
        <Link key={index} to={`/dettaglio/${index + 1}`}>
          <img
            src={src}
            alt={`Immagine ${index + 1}`}
            style={{ transform: `translateX(${calculatePosition(index)}px)` }}
            className="carosello-immagine"
          />
        </Link>
      ))}
    </div>
  );
};

export default Carosello;