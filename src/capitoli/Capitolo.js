// src/capitoli/Capitolo.js
import React from 'react';

const Capitolo = ({ titolo, affermazioni }) => {
  return (
    <div className="box-semi-trasparente">
      <h2>{titolo}</h2>
      {affermazioni.map((affermazione, index) => (
        <div key={index} className="affermazione-contestazione">
          <div className="affermazione">
            <p><strong>Affermazione:</strong> {affermazione.testo}</p>
          </div>
          <div className="contestazione">
            <p><strong>Contestazione:</strong> {affermazione.contestazioni}</p>
            {affermazione.immagine && (
              <img src={affermazione.immagine} alt="Esempio" />
            )}
            <p><em>Commento:</em> {affermazione.commento}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Capitolo;
