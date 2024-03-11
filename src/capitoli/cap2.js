// src/capitoli/cap1.js
import React from 'react';
import Capitolo from './Capitolo'; // Importa il componente Capitolo dalla stessa cartella
import immagine1 from '../immagini2/immagine1.jpg';
import immagine2 from '../immagini2/immagine2.jpg';

const affermazioniCap1 = [
  {
    testo: "L'intelligenza artificiale non riesce a creare o a gestire una pianificazione strategica complessa...",
    contestazioni: "AlphaGo ha battuto Lee Sedol nel 2016, dimostrando capacità strategiche superiori.",
    immagine: immagine1,
    commento: "Parla di come AlphaGo ha utilizzato l'intuizione per vincere."
  },
  {
    testo: "I limiti per quanto riguarda creatività e originalità...",
    contestazioni: "Optimus 2 e Gemini mostrano abilità avanzate in ambienti non strutturati.",
    immagine: immagine2,
    commento: "Mostra come questi robot gestiscono compiti complessi."
  }
];

const Cap1 = () => {
  return (
    <Capitolo 
      titolo="Panorama dell'IA" 
      affermazioni={affermazioniCap1} 
    />
  );
};

export default Cap1;
