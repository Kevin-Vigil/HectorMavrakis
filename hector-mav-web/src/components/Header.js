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
            <p>
                mobile test
            </p>
        </nav>
        <nav className='header'>
            <p>
                non-mobile test
            </p>
        </nav>
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

function MobileHeader(){
    return(
        <>
            <div>
                test
            </div>
        </>
    )
}

export default Header;