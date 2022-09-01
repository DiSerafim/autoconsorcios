import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Colaborador from './Pages/Colaborador';
import Observacao from './Pages/Observacao';
import Empresa from './Pages/Empresa';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/colaborador' element={<Colaborador />} />
          <Route path='/observacao' element={<Observacao />} />
          <Route path='/empresa' element={<Empresa />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
