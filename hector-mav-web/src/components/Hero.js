import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";
import phoneDemo from '../assets/phoneDemo.png'
import {ReactComponent as Arrow} from '../assets/Vectorarrow.svg'

export default function Hero(props){
    return(
        <>
            <div className="hero-container">
                <div className="scroll-down">

                </div>
                <div className="hero-content">
                    <div className="statement">I DESIGN WHAT PEOPLE</div>
                    <div className="envision">ENVISION</div>
                    <div className="hero-purpose">Alleviating end-users' frustrations through unique solutions.</div>
                    <Link to='#projects'className="view-projects-container">
                        <div className="view-projects-text">View projects</div>
                        <Arrow className='arrow'/>
                    </Link>
                    <img src={phoneDemo}></img>
                </div>
            </div>  
        </>
    );    
} 