import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import "./Animations.css"
import { } from '@mui/material'

import { ReactComponent as Logo } from '../assets/hmLogo.svg'
import { ReactComponent as ColorSwitch } from '../assets/Switch.svg'
import Hamburger from './Hamburger';

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  let darkModeState = false;

  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state)
  }
  function load() {
    darkModeState = (localStorage.getItem("dark-mode") == "true")
    toggleDarkMode(darkModeState)

    // button.addEventListener("click", () => {
    //   // document.documentElement.classList.toggle("light-mode", darkModeState)
    //   darkModeState = !darkModeState
    //   toggleDarkMode(darkModeState)
    //   setDarkModeLocalStorage(darkModeState);
    // });

    console.log(darkModeState)

  }
  window.addEventListener("DOMContentLoaded", () => {
    load();

  });
  function setDarkModeLocalStorage(state) {
    localStorage.setItem("dark-mode", state);
  }

  function toggleDark(){
    darkModeState = !darkModeState
    toggleDarkMode(darkModeState)
    setDarkModeLocalStorage(darkModeState)
  }

  function menuToggle() {
    setShowMenu(showMenu => !showMenu)
  }




  return (
    <>
      <div className='header'>
        <div className='nav-container'>
          <a href='/' className='hec-mav-logo'>
            <Logo className='logo-svg' />
          </a>
          
          <div id='menu-hamburger' onClick={menuToggle} >
            <Hamburger isOpen={showMenu} />
          </div>
          {showMenu ? (<div id='mobile-link-box'>
              <a href='/#brands' onClick={menuToggle} className='links'>BRANDS</a>
              <a href='/#projects' onClick={menuToggle} className='links'>PROJECTS</a>
              <a href='/#about' onClick={menuToggle} className='links'>ABOUT</a>
            </div>) : null}
          {/* <div id='test-text'>{showMenu}</div> */}
          <div className='header-nav-box'>
            {/* <a href='#brands' className='links'>BRANDS</a> */}

            <div id='link-box'>

              <a href='/#brands' className='links'>BRANDS</a>
              <a href='/#projects' className='links'>PROJECTS</a>
              <a href='/#about' className='links'>ABOUT</a>
            </div>
          </div>
          <ColorSwitch onClick={toggleDark} id='cSwitch' className='header-switch' />
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