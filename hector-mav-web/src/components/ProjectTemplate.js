import React from "react";
import './ProjectTemplate.css'
import '../fonts/Fonts.css'
import scrollTrigger from './scrollTrigger.js'

export default function ProjectTemplate(props){
  document.addEventListener("DOMContentLoaded", ()=>{
    const options = {
      rootMargin: "-50% 0% -50% 0%",
      threshold: 0
    }
    // console.log(""+topMarg+"px 0px 0px "+botMarg+"px")
    
    const sections = document.querySelectorAll(".p-section")
    sections.forEach(element =>{
      let mutObserver = new MutationObserver(items=>{
        // console.log("start of observer")
        items.forEach(item=>{
          // console.log(item.target.id)
          const dotItem = document.querySelector("#"+item.target.id+"-dot")
          const textItem = document.querySelector("#"+item.target.id+"-text")
          // console.log("Dot item: " + dotItem.id + "\tText item: " + textItem.id)
          if (item.target.classList.contains("active-comp")){
            // console.log("Entered true statement on: "+item.target.id)
            dotItem.classList.toggle("active-comp", true);
            // console.log(textItem.classList)
            textItem.classList.toggle("active-comp", true);
            // console.log(dotItem.classList)
          }
          else{
            // console.log("Entered false statement on: "+item.target.id)
            textItem.classList.toggle("active-comp", false);
            // console.log(textItem.classList)
            dotItem.classList.toggle("active-comp",false);
            // console.log(dotItem.classList)
          }
          // console.log("passed callback")
        })
      },
      )
      // console.log(element)
      mutObserver.observe(element, {attributes: true,CharacterData: true});
    })

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
        <div id="objective-text" className="toc-text">Objective</div>
        <div id="objective-dot" className="dot"/> 
      </div>
      <div id="reasearch-index" className="toc-card">
        <div id="research-text" className="toc-text">User Research</div>
        <div id="research-dot" className="dot"/> 
      </div>
      <div id="analysis-index" className="toc-card">
        <div id="analysis-text" className="toc-text">Competitive Analysis</div>
        <div id="analysis-dot" className="dot"/> 
      </div>
      <div id="solutions-index" className="toc-card">
        <div id="solutions-text" className="toc-text">Solution</div>
        <div id="solutions-dot" className="dot"/> 
      </div>
      <div id="conclusion-index" className="toc-card">
        <div id="conclusion-text" className="toc-text">Final Designs</div>
        <div id="conclusion-dot" className="dot"/> 
      </div>
    </div>
    <div id="objective" className="p-section">
      <div className="start">Objective start</div>
    </div>
    <div id="research" className="p-section">
      <div className="start">Reasearch start</div>
    </div>
    <div id="analysis" className="p-section">
      <div className="start">Analysis start</div>
    </div>
    <div id="solutions" className="p-section">
      <div className="start">solutions start</div>
    </div>
    <div id="conclusion" className="p-section">
      <div className="start">Conclusion start</div>
    </div>
  </div>
  )
}