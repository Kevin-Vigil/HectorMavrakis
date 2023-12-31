import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import "./Animations.css"
import { } from '@mui/material'

import { ReactComponent as Logo } from '../assets/hmLogo.svg'
import { ReactComponent as ColorSwitch } from '../assets/Switch.svg'
import Exit from './Hamburger';
import Hamburger from './Hamburger';

function Header() {
  const [showMenu, setShowMenu] = useState(false)
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

    darkModeState=(localStorage.getItem("dark-mode") == "true")
    toggleDarkMode(darkModeState)

    button.addEventListener("click", () => {
      // document.documentElement.classList.toggle("light-mode", darkModeState)
      darkModeState = !darkModeState
      toggleDarkMode(darkModeState)
      setDarkModeLocalStorage(darkModeState);
    });

  }
  window.addEventListener("DOMContentLoaded", () => {
    load();
    
  });

  function menuToggle(){
    setShowMenu(showMenu => !showMenu)
    console.log(showMenu)
  }




  return (
    <>
      <div className='header'>
        <div className='nav-container'>
          <a href='/' className='hec-mav-logo'>
            <Logo className='logo-svg' />
          </a>
          
          <div className='header-nav-box'>
            <button id='menu-hamburger' onClick={menuToggle}>
              <Hamburger isOpen={showMenu}/>
            </button>
            {/* <a href='#brands' className='links'>BRANDS</a> */}
            <div id='link-box'>
              {/* {showMenu? <Exit onClick={menuToggle}/>: null} */}
              {/* <Exit/> */}
              <a href='/#brands' className='links'>BRANDS</a>
              <a href='/#projects' className='links'>PROJECTS</a>
              <a href='/#about' className='links'>ABOUT</a>
            </div>
          </div>
          <ColorSwitch id='cSwitch' className='header-switch' />
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
    // document.getElementsByClassName("header-mobile")[0].style.height = "75px";
  } else {
    document.getElementsByClassName("header")[0].style.height = "100px";
    // document.getElementsByClassName("header-mobile")[0].style.height = "100px";
  }
}

export default Header;