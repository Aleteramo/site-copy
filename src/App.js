
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NeuralScene from './NeuralScene';
import Carosello from './Carosello';
import DettaglioCapitolo from './DettaglioCapitolo'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NeuralScene />
        <Routes>
          <Route path="/" element={
             <>
             <section className="full-screen-section">
               <div className="contenuto-testuale">
                 <h1>Titolo della Mia Tesi</h1>
                 <p>Questa è una breve descrizione della mia tesi.</p>
               </div>
             </section>
             <section className="carousel-section">
               <Carosello />
             </section>
           </>
          } />
          <Route path="/dettaglio/:id" element={<DettaglioCapitolo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



