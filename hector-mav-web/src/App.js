import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
