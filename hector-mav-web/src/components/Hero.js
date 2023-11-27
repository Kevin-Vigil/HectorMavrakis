import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Arrow} from '../assets/Vectorarrow.svg'

export default function Hero(props){
    return(
        <>
            <div className="hero-container">
                <div className="scroll-down">

                </div>
                <div className="hero-content">
                    <h3 className="statement">I DESIGN WHAT PEOPLE</h3>
                    <h1 className="envision">ENVISION</h1>
                    <div className="hero-purpose">Alleviating end-users' frustrations through unique solutions.</div>
                    <Link to='#projects'className="view-projects-container">
                        <div className="view-projects-text">View projects</div>
                        <Arrow/>
                    </Link>
                    <img src="../assets/phoneDemo.png"></img>
                </div>
            </div>  
        </>
    );    
} 