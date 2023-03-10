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
import store from './store/store';
import { Provider } from 'react-redux';
import CadastroPostagens from './components/postagens/cadastroPostagens/CadastroPostagens';
import DeletarPostagens from './components/postagens/deletarPostagens/DeletarPostagens';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
      <Navbar />
      <div style={{ minHeight: '60vh' }}>
      <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path='/formularioTema' element={<CadastroTema />} />
            <Route path='/formularioTema/:id' element={<CadastroTema />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />
            <Route path='/formularioPostagem' element={<CadastroPostagens />} />
            <Route path='/formularioPostagem/:id' element={<CadastroPostagens />} />
            <Route path='/deletarPostagem/:id' element={<DeletarPostagens />} />
      </Routes>
      </div>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;