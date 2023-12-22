import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import "./Animations.css"
import { } from '@mui/material'

import { ReactComponent as Logo } from '../assets/hmLogo.svg'
import { ReactComponent as ColorSwitch } from '../assets/Switch.svg'

function Header() {

  function load() {
    let darkModeState = false;

    const button = document.querySelector("#cSwitch")

    const useDark = window.matchMedia("(prefers-color-scheme: dark)")

    function toggleDarkMode(state) {
      document.documentElement.classList.toggle("dark-mode", state)
    }

    function setDarkModeLocalStorage(state) {
      localStorage.setItem("dark-mode", state);
    }

    toggleDarkMode(localStorage.getItem("dark-mode") == "true")

    button.addEventListener("click", () => {
      document.documentElement.classList.toggle("light-mode", darkModeState)
      darkModeState = !darkModeState
      toggleDarkMode(darkModeState)
      setDarkModeLocalStorage(darkModeState);
    });

  }
  window.addEventListener("DOMContentLoaded", () => {
    load();
  });






  return (
    <>
      <nav className='header-mobile'>
        <a to='/' className='hec-mav-logo'>
          {/* <img src={logo} className='hec-logo'/> */}
          <Logo />
        </a>

        <div className='navbar-mobile'>
          <ColorSwitch className='header-switch' />
        </div>
      </nav>




      <div className='header'>
        <div className='nav-container'>
          <a href='/' className='hec-mav-logo'>
            <Logo className='logo-svg' />
          </a>
          <div className='header-nav-box'>
            {/* <a href='#brands' className='links'>BRANDS</a> */}
            <Link to='/#brands' className='links'>BRANDS</Link>
            <Link to='/#projects' className='links'>PROJECTS</Link>
            <Link to='/#about' className='links'>ABOUT</Link>
            <ColorSwitch id='cSwitch' className='header-switch' />

          </div>
        </div>
      </div>
    </>
  )

  // return(
  //     <>
  //         {mobile? (
  //         <MobileHeader/>):(
  //         <nav className='header'>
  //             <div className='header-container'>
  //                 <Link to="/" className='header-logo'>
  //                     innerWidth: {mobile.innerWidth} <i className='fab fa-typo3'/>
  //                 </Link>
  //             </div>
  //         </nav>
  //         )}
  //     </>
  // )
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("header")[0].style.height = "75px";
    document.getElementsByClassName("header-mobile")[0].style.height = "75px";
  } else {
    document.getElementsByClassName("header")[0].style.height = "100px";
    document.getElementsByClassName("header-mobile")[0].style.height = "100px";
  }
}

export default Header;