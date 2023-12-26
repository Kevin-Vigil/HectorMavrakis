import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import Footer from "../components/Footer";

import './Quantify.css'

export default function Quantify(){
  return(
  <div id="quantify">
    <ProjectTemplate props={false}/>

    <Footer/>
  </div>
  )
}