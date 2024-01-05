// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Footer from './components/Footer';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Quantify from './pages/Quantify';
import ScrollToTop from './components/ScrollToTop';
// import ProjectTemplate from './components/ProjectTemplate';


function App() {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }
  return (
    <div id='app'>
      <script>0</script>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/quantify' element={<Quantify/>}/>
      </Routes>
    </div>
  );
}

export default App;
