import React from 'react';
import Sedol from '../immagini2/Sedol.jpg';
import immagine2 from '../immagini2/immagine2.jpg';
import './Cap1.css'; // Assicurati di creare un file CSS per i tuoi stili

const Cap1 = () => {
  return (
    <div className="box-semi-trasparente">
      <h2 className="titolo-capitolo">Panorama dell'IA</h2>
      <div className="testo-introduttivo">
        <p>"L'intelligenza artificiale non riesce a creare o a gestire una pianificazione strategica complessa."</p>
        <p>"Non può svolgere un lavoro che richieda una precisa coordinazione oculo-manuale."</p>
        <p>"Né di interagire con empatia e compassione."</p>
        <p>"L’intelligenza artificiale, quindi, non può sostituire le diverse forme di intelligenza umana."</p>
      </div>
      <div className="box-immagini">
        <img src={Sedol} alt="Analisi pubblicità Panzani" />
        <img src={immagine2} alt="Analisi pubblicità Esselunga" />
      </div>
      <div className="commenti-contestazioni">
        <p><strong>Contestazione:</strong> AlphaGo ha battuto Lee Sedol nel 2016, dimostrando capacità strategiche superiori.</p>
        <p><em>Commento:</em> Parla di come AlphaGo ha utilizzato l'intuizione per vincere.</p>
        <p><strong>Contestazione:</strong> Optimus 2 e Gemini mostrano abilità avanzate in ambienti non strutturati.</p>
        <p><em>Commento:</em> Mostra come questi robot gestiscono compiti complessi.</p>
      </div>
    </div>
  );
};

export default Cap1;
