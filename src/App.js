import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import DettaglioCapitolo from './DettaglioCapitolo';
import NeuralScene from './NeuralScene';
import './App.css'; // Importa una volta qui

// Rimuovi l'importazione di Carosello se non viene utilizzato direttamente in App.js
// import Carosello from  './Carosello'; // Assicurati che il percorso sia corretto se necessario

function App() {
  return (
    <Router basename="/site">
      <div>
        {/* Renderizza NeuralScene fuori e indipendentemente dalle Routes per usarlo come sfondo */}
        <NeuralScene />
        
        {/* Il contenuto che cambia in base alla route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dettaglio/:id" element={<DettaglioCapitolo />} />
          {/* Altre route se necessario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
