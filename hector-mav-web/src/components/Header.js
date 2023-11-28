import React, { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
import {} from '@mui/material'

import logo from '../assets/hector-mav-vector.svg'
import {ReactComponent as Logo} from "../assets/hec-logo.svg"

function Header(){
    const [mobile, setMobile] = useState(getMobile())

    useEffect(() => {
        function handleWindowResize() {
          setMobile(getMobile());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []
    );

    
    return(
        <>
        <nav className='header-mobile'>
            <Link to='/' className='hec-mav-logo'>
              {/* <img src={logo} className='hec-logo'/> */}
              <Logo/>
            </Link>

            
            <div className='navbar-mobile'>
                
            </div>
        </nav>



        
        <div className='header'>
          <div className='nav-container'>
            <Link to='/' className='hec-mav-logo'>
              <img src={logo} className='hec-logo'/>
            </Link>
            <div className='header-nav-box'>
              <Link to='/brands' className='links'>BRANDS</Link>
              <Link to='#projects' className='links'>PROJECTS</Link>
              <Link to='/about' className='links'>ABOUT</Link>
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementsByClassName("header")[0].style.height = "50px";
    document.getElementsByClassName("header-mobile")[0].style.height = "50px";
  } else {
    document.getElementsByClassName("header")[0].style.height = "75px";
    document.getElementsByClassName("header-mobile")[0].style.height = "75px";
  }
} 



function getMobile() {
    const innerWidth = window.innerWidth;
    return (innerWidth < 720);
  }

export default Header;