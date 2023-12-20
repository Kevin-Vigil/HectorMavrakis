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
      <Header />
      <Home/>
    </>
  );
}

export default App;
