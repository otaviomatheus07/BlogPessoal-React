import React from 'react';
import Home from './paginas/Home/Home';
import './App.css';
import Footer from './components/estatico/footer/Footer';
import Navbar from './components/estatico/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/cadastro'element={<Cadastro/>}/>
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
