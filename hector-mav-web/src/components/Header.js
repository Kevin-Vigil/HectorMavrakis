import React, { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
import {} from '@mui/material'

import logo from '../assets/hector-mav-vector.svg'
import {ReactComponent as Arrow} from '../assets/Vectorarrow.svg'


function Stuff(props) {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="flex w-full max-w-[1645px] items-center justify-between gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch justify-between gap-5 my-auto">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6370fd2e-7808-48fc-a0bc-b213d4bf88e8?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&"className="aspect-[1.02] object-contain object-center w-[47px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="items-stretch self-center flex justify-between gap-5 my-auto px-5 max-md:justify-center">
            <div className="text-neutral-800 text-base font-semibold leading-4">
              Brands
            </div>
            <div className="text-neutral-800 text-base font-semibold leading-4">
              Projects
            </div>
            <div className="text-neutral-800 text-base font-semibold leading-4 whitespace-nowrap">
              About
            </div>
          </div>
        </div>
        <div className="items-stretch border self-stretch flex justify-between gap-1.5 pl-6 pr-9 py-5 border-solid border-black max-md:px-5">
          <div className="text-black text-base font-medium leading-6">
            View projects
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/561bdbba-3795-49e2-b5ad-cd7491427d0d?apiKey=da34e7bbe5e040e89ba55e9fb0fb24db&"
            className="aspect-[1.17] object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
      <div className="bg-stone-900 bg-opacity-10 self-stretch min-h-[1px] w-full mt-4 max-md:max-w-full" />
    </div>
  );
}



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
              <img src={logo} className='hec-logo'/>
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