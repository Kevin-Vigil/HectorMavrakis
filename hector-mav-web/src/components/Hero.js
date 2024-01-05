import React from "react";
import './Hero.css'
import '../fonts/Fonts.css'
import './Animations.css'
import { Link } from "react-router-dom";
import phoneLight from '../assets/lightPhoneDemo.png'
import phoneDark from "../assets/darkPhoneDemo.png"
import { ReactComponent as Arrow } from '../assets/Vectorarrow.svg'
import scrollTrigger from "./scrollTrigger";

export default function Hero(props) {

  function load() {
    document.documentElement.classList.toggle("loadin", true)

    const aniEnd = document.querySelector("#scroll-container")
    aniEnd.addEventListener("animationend", (event) => {
      if (event.animationName === 'load-in')
        document.documentElement.classList.toggle("loadin", false)
    })
    console.log("Inside hero load function for scroll container listener")
    document.addEventListener('scroll', ()=>{
      console.log("Scroll happened")
      aniEnd.classList.add("one-time")
    })

    // scrollTrigger("#scroll-container", {rootMargin: "-40% 0% -50% 0%", threshold: 0}, false, "one-time", true)
  }

  document.addEventListener("DOMContentLoaded", () => {
    // document.documentElement.classList.toggle("loadin", false)
    // const cta = document.querySelector("#cta");
    // cta.addEventListener("mouseover", () => {
    //   cta.classList.add("hover")
    // });
    // cta.addEventListener("mouseout", () => {
    //   cta.classList.remove("hover")
    // });
    load();
  });
  return (
    <>
      <div id="hero-container">
        <div id="scroll-container">
          <div id="scroll-arrow">
            <div id="scroll-arrowhead" />
            <div id="scroll-line2" />
          </div>
          <div id="scroll-text">SCROLL DOWN</div>
          <div id="scroll-endLine" />
        </div>
        <div id="hero-textbox">
          <div id="hero-statement">I DESIGN WHAT PEOPLE</div>
          <div id="envision-scaler">
            <div id="hero-envision">ENVISION</div>
          </div>
          <div id="hero-purpose">Alleviating end-users' frustrations through unique solutions.</div>
        </div>
        <a href='#projects' id="cta" >
          <div id="hero-cta-textbox">
            <div id="cta-text">View projects</div>
            <Arrow id='cta-arrow' />
          </div>
        </a>
        <div id="hero-mockup-container" >
          <img loading='lazy' id='hero-mockup-img' src={phoneLight} />
        </div>
      </div>
    </>
  );
} 