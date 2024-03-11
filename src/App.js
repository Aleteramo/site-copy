import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NeuralScene from './NeuralScene';
import './App.css';
import Capitolo1 from './capitoli/cap1';
import Capitolo2 from './capitoli/cap2';
import Capitolo3 from './capitoli/cap3';
import Capitolo4 from './capitoli/cap4';
import Capitolo5 from './capitoli/cap5';

function App() {
  return (
    <Router basename="/site">
      <div>
        <NeuralScene /> {/* Usato come sfondo */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dettaglio/1" element={<Capitolo1 />} />
          <Route path="/dettaglio/2" element={<Capitolo2 />} />
          <Route path="/dettaglio/3" element={<Capitolo3 />} />
          <Route path="/dettaglio/4" element={<Capitolo4 />} />
          <Route path="/dettaglio/5" element={<Capitolo5 />} />
          {/* Aggiungi altre route se necessario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;