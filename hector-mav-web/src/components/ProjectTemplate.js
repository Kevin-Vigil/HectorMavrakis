import React from "react";
import './ProjectTemplate.css'
import '../fonts/Fonts.css'
import scrollTrigger from './scrollTrigger.js'

export default function ProjectTemplate(props){
  document.addEventListener("DOMContentLoaded", ()=>{
    const options = {
      rootMargin: "-100px",
      threshold: .5,
    }
    scrollTrigger(".p-section", options);
  })

  return(
    <div id="template">
      <div id="page-box">
        <div id="page-box-title"/>
        <div id="page-box-text"/>
      </div>
      <div id="toc">
      <div id="objective-index" className="toc-card">
        <div className="toc-text">Objective</div>
        <div className="dot"/> 
      </div>
      <div id="reasearch-index" className="toc-card">
        <div className="toc-text">User Research</div>
        <div className="dot"/> 
      </div>
      <div id="analysis-index" className="toc-card">
        <div className="toc-text">Competitive Analysis</div>
        <div className="dot"/> 
      </div>
      <div id="solutions-index" className="toc-card">
        <div className="toc-text">Solution</div>
        <div className="dot"/> 
      </div>
      <div id="conclusion-index" className="toc-card">
        <div className="toc-text">Final Designs</div>
        <div className="dot"/> 
      </div>
    </div>
    <div id="objective" className="p-section">
      <div className="start">Objective start</div>
      <div className="end">Objective end</div>
    </div>
    <div id="research" className="p-section">
      <div className="start">Reasearch start</div>
      <div className="end">Research end</div>
    </div>
    <div id="analysis" className="p-section">
      <div className="start">Analysis start</div>
      <div className="end">Analysis end</div>
    </div>
    <div id="solutions" className="p-section">
      <div className="start">solutions start</div>
      <div className="end">Solutions end</div>
    </div>
    <div id="conclusion" className="p-section">
      <div className="start">Conclusion start</div>
      <div className="end">Conclusion end</div>
    </div>

    </div>
  )
}