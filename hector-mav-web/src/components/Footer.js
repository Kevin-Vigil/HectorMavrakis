import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <nav className='footer'>
        <div className='footer-container'>
          <Link to='/' className='footer-logo'>
            HectorMavrakis <i className='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Footer;