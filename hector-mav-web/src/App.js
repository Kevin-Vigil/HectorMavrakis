// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Footer from './components/Footer';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Quantify from './pages/Quantify';
// import ProjectTemplate from './components/ProjectTemplate';

function App() {
  return (
    <>
    <script>0</script>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/quantify' element={<Quantify/>}/>
    </Routes>
    </>
  );
}

export default App;
