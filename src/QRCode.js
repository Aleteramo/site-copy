// QRCode.js
import React from 'react';
import qrcode from './immagini2/qrcodesito.png';

const QRCode = () => {
  return (
    <div className="qr-code-container">
      <img src={qrcode} alt="QR Code del sito" className="qr-code-image" />
    </div>
  );
};

export default QRCode; // Esportazione predefinita
