import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Administrativo from './Pages/Administrativo';
import Callcenter from './Pages/Callcenter';
import Diretoria from './Pages/Diretoria';
import Dp from './Pages/Dp';
import Ferramentas from './Pages/Ferramentas';
import Financeiro from './Pages/Financeiro'; 
import Home from './Pages/Home';
import Marketing from './Pages/Marketing';
import Parceiros from './Pages/Parceiros';
import Recepcao from './Pages/Recepcao';
import ServicosGerais from './Pages/ServicosGerais';
import Ti from './Pages/Ti';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/administrativo' element={<Administrativo />} />
          <Route path='/callcenter' element={<Callcenter />} />
          <Route path='/diretoria' element={<Diretoria />} />
          <Route path='/dp' element={<Dp />} />
          <Route path='/ferramentas' element={<Ferramentas />} />
          <Route path='/financeiro' element={<Financeiro />} />
          <Route path='/' element={<Home />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route path='/parceiros' element={<Parceiros />} />
          <Route path='/recepcao' element={<Recepcao />} />
          <Route path='/servicosGerais' element={<ServicosGerais />} />
          <Route path='/ti' element={<Ti />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
