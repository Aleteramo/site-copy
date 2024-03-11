// QRCode.js
import React from 'react';
import qrcode from './immagini2/qrcodesito.png';

const QRCode = ({ animate }) => {
  // Aggiungi una classe per attivare l'animazione basata sulla prop 'animate'
  const qrCodeClass = animate ? 'qr-code-image animate' : 'qr-code-image';

  return (
    <div className="qr-code-container">
      <img src={qrcode} alt="QR Code del sito" className={qrCodeClass} />
    </div>
  );
};

export default QRCode; // Esportazione predefinita
