import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    
    return(
        <>
            <nav className='header'>
                <div className='header-container'>
                    <Link to='/' className='header-logo'>
                        HectorMavrakis <i className='fab fa-typo3'/>
                    </Link>
                    <Link>
                        
                    </Link>
                </div>
            </nav>
        </>
    )
}

function MobileHeader(){
    return(
        <>
        </>
    )
}

export default Header;