import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
