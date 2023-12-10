import React from "react";
import './Hero.css'
import './Animations.css'
import { Link } from "react-router-dom";
import phoneLight from '../assets/lightPhoneDemo.png'
import phoneDark from "../assets/darkPhoneDemo.png"
import {ReactComponent as Arrow} from '../assets/Vectorarrow.svg'

export default function Hero(props){
    
    function load(){
        var animationEnd = "webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend"
    }

    document.addEventListener("DOMContentLoaded",load)
    return(
        <>
            <div className=" hero-container">
                <div className="scroll-down">
                    <div className="line1"/>
                    <div className="scroll-text">SCROLL DOWN</div>
                    <div className="arrow">
                        <div className="line2"/>
                        <div className="arrowhead"/>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="statement">I DESIGN WHAT PEOPLE</div>
                    <div className="envision">ENVISION</div>
                    <div className="hero-purpose">Alleviating end-users' frustrations through unique solutions.</div>
                    <Link to='#projects'className="view-projects-container">
                        <div className="view-projects-text">View projects</div>
                        <Arrow className='arrow'/>
                    </Link>
                    <div className="hero-phone-img-container">
                        <img loading='lazy' className='phone-demo-img' src={phoneLight}/>
                    </div>
                </div>
            </div>  
        </>
    );    
} 