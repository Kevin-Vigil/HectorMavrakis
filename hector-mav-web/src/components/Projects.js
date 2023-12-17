import React from "react";
import './Projects.css';

export default function Projects(){
    return(
    <div id="projects-container">
        <div id="projects-list-textbox">
            <div id="projects-list-header">PROJECTS</div>
            <div id="projects-list-statement">Take a look at what I've designed.</div>
        </div>
        <div id="projects-list-container">
            <div id="row-1" className="projects-box-container">
                <div id="walmart-container">
                    <div id="walmart-textbox">

                    </div>
                    <div id="walmart-phone-demo">
                        
                    </div>
                </div>
            </div>
            <div id="row-2" className="projects-box-container">
                <div id="quantify-container">

                </div>
                <div id="big-o-tires-container">

                </div>
            </div>
        </div>
    </div>
    )
}