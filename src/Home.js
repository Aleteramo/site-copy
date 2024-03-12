// Home.js
import React, { useState, useEffect } from 'react'; // Importa useState e useEffect
import Carosello from './Carosello';
import QRCode from './QRCode'; // Importa il componente QRCode

function Home() { 
  console.log("Rendering Home");
  const [animateQRCode, setAnimateQRCode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sostituisci `100` con il valore di scroll che attiva l'animazione
      if (window.scrollY > 100) {
        setAnimateQRCode(true);
      } else {
        setAnimateQRCode(false); // Aggiungi questa riga per disattivare l'animazione quando si scrolla verso l'alto
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const qrCodeContainerClass = `qr-code-container ${animateQRCode ? 'qr-code-animate' : ''}`;

  return (
    <>
      <section className="contenuto-testuale">
        <h1>"Decodificare gli Stereotipi: L'Impatto delle Intelligenze Artificiali sui Messaggi Pubblicitari"</h1>
        <p><p>"L'intelligenza artificiale non riesce a creare o a gestire una pianificazione strategica complessa."</p>
        <p>"Non può svolgere un lavoro che richieda una precisa coordinazione oculo-manuale."</p>
        <p>"Né di interagire con empatia e compassione."</p>
        <p>"L’intelligenza artificiale, quindi, non può sostituire le diverse forme di intelligenza umana."</p></p>
      </section>
      <section className="carousel-section">
        <Carosello />
      </section>
      <section className={qrCodeContainerClass}>
        <QRCode /> {/* Passa la prop animate al componente QRCode */}
      </section>
    </>
  );
}

export default Home;
