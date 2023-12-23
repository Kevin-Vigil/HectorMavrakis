import React from "react";
import './ProjectTemplate.css'
import '../fonts/Fonts.css'

export default function ProjectTemplate(props){
  return(
    <div id="template">
      <div id="intersection-listener"/>
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


      </div>
      <div id="research" className="p-section">

      </div>
      <div id="analysis" className="p-section">

      </div>
      <div id="solutions" className="p-section">

      </div>
      <div id="conclusion" className="p-section">

      </div>

    </div>
  )
}