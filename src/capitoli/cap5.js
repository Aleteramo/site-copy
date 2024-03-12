// src/capitoli/Capitolo5.js
import React from 'react';
import Capitolo from './Capitolo';
import pubblicitaPanzani from '../immagini2/pubblicitaPanzani.jpg';
import pubblicitaEsselunga from '../immagini2/pubblicitaEsselunga.jpg';

const affermazioniCap5 = [
  {
    testo: (
      <>
        <p>Il Capitolo 5 è dedicato all'esplorazione delle tecniche di prompting avanzate e al ruolo degli AI agents nella risoluzione di problemi complessi attraverso la collaborazione.</p>
        <p>Analizziamo il caso di studio della pubblicità di Panzani, analizzata nel 2023 da Bard, prima che assumesse il nome di Gemini, e confrontiamo i risultati con l'ultima analisi della pubblicità "La Carota" di Esselunga, effettuata da un team di AI agents.</p>
        <p>Le dimensioni dell'analisi e gli aspetti considerati variano notevolmente in base ai prompt forniti, dimostrando l'evoluzione e l'affinamento delle tecniche di intelligenza artificiale nel marketing.</p>
      </>
    ),
    immagine: pubblicitaPanzani,
    commento: "Pubblicità Panzani analizzata da Bard nel 2023."
  },
  {
    testo: (
      <>
        <p>L'analisi della pubblicità "La Carota" di Esselunga mette in luce come gli AI agents siano in grado di collaborare e di svolgere compiti di analisi pubblicitaria con un livello di dettaglio e una profondità senza precedenti.</p>
        <p>Attraverso l'uso di prompt mirati, gli agenti sono stati in grado di identificare non solo elementi visivi chiave, ma anche di interpretare sottili messaggi e valori del brand, fornendo insight preziosi per le strategie di marketing future.</p>
      </>
    ),
    immagine: pubblicitaEsselunga,
    commento: "Ultima analisi della pubblicità di Esselunga da parte degli AI agents."
  }
];

const Cap5 = () => {
  return (
    <Capitolo 
      titolo="Tecniche di Prompting e Collaborazione degli AI Agents" 
      affermazioni={affermazioniCap5} 
    />
  );
};

export default Cap5;
