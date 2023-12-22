import React from "react";
import './Hero.css'
import './Animations.css'
import { Link } from "react-router-dom";
import phoneLight from '../assets/lightPhoneDemo.png'
import phoneDark from "../assets/darkPhoneDemo.png"
import { ReactComponent as Arrow } from '../assets/Vectorarrow.svg'

export default function Hero(props) {

  function load() {
    document.documentElement.classList.toggle("loadin", true)

    const aniEnd = document.querySelector("#scroll-down")
    aniEnd.addEventListener("animationend", (event) => {
      if (event.animationName === 'load-in')
        document.documentElement.classList.toggle("loadin", false)
    })
  }

  document.addEventListener("DOMContentLoaded", () =>{
    
    const cta = document.querySelector("#cta");
    cta.addEventListener("mouseover", () => {
      cta.classList.add("hover")
    });
    cta.addEventListener("mouseout", () => {
      cta.classList.remove("hover")
    });
    load();
  });
  return (
    <>
      <div id="hero-container">
        <div id="scroll-down">
          <div id="line1" />
          <div id="scroll-text">SCROLL DOWN</div>
          <div id="arrow">
            <div id="line2" />
            <div id="arrowhead" />
          </div>
        </div>
        <div id="hero-content">
          <div id="hero-textbox">
            <div className="statement">I DESIGN WHAT PEOPLE</div>
            <div className="envision">ENVISION</div>
            <div className="hero-purpose">Alleviating end-users' frustrations through unique solutions.</div>
          </div>
          <a href='#projects' id="cta" className="view-projects-container">
            <div id="hero-cta-textbox">
              <div className="view-projects-text">View projects</div>
              <Arrow className='view-projects-arrow-svg' />
            </div>
          </a>
          <div className="hero-phone-img-container">
            <img loading='lazy' className='phone-demo-img' src={phoneLight} />
          </div>
        </div>
      </div>
    </>
  );
} 