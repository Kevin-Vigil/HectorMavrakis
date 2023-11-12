import React, { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";



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
                test
            </Link>
            <div className='navbar-mobile'>
                
            </div>
        </nav>
        <div className='header'>
            <p>
                non-mobile test
            </p>
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

function getMobile() {
    const innerWidth = window.innerWidth;
    return (innerWidth < 720);
  }

export default Header;