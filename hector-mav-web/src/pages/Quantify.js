import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import './Quantify.css'

export default function Quantify(){
  return(
  <div id="quantify">
    <ProjectTemplate props={false}/>

    <Hero/>

    <Footer/>
  </div>
  )
}