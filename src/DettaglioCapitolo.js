// DettaglioCapitolo.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DettaglioCapitolo = () => {
  let { id } = useParams(); 
  return (
    <div>
      <h2>Dettaglio del Capitolo {id}</h2>
      {/* Mostra qui i dettagli del capitolo basati sull'id */}
    </div>
  );
};

export default DettaglioCapitolo;