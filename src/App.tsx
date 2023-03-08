import React from 'react';
import Home from './paginas/Home/Home';
import './App.css';
import Footer from './components/estatico/footer/Footer';
import Navbar from './components/estatico/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/tema" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
