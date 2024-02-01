import React from "react";
import './Projects.css';

import LockPNG from '../assets/lock.png'

import { ReactComponent as Subtract } from "../assets/Subtract.svg"
import { ReactComponent as WalmartPhone } from '../assets/walmart-phone-demo.svg'
// import { ReactComponent as FundPhone} from "../assets/fundPhoneDemo.svg"

import QuantifyPhone from '../assets/quantifyPhoneDemo.png'
import BigOPhone from '../assets/bigOTiresDemo.png'
import DiscoverPhone from '../assets/discoverPhoneDemo.png'
import FundPhone from "../assets/fundPhoneDemo.png"
import { Link } from "react-router-dom";
import { useElementOnScreen } from './IntersectionTrigger';

export default function Projects() {
  const [ containerRef, isVisible] = useElementOnScreen({
    rootMargin: "-15% 0% -30% 0%",
    threshold: 0
  })
  return (
    <div id="projects" ref={containerRef} className={isVisible? "active-comp" : "inactive-comp"}>
      <div id="projects-list-textbox">
        <div id="projects-list-header">PROJECTS</div>
        <div id="projects-list-statement">Take a look at what I've designed.</div>
      </div>
      <div id="projects-list-container">
        <div id="row-1" className="projects-box-container">
          <div id="walmart-container" className="project-box" >
            <div id="walmart-textbox">
              <div id="walmart-title">
                Walmart FastTrack
              </div>
              <div id="walmart-subtitle">
                Digitally enhancing the in-store shopping experience
              </div>
            </div>
            <WalmartPhone id="walmart-phone" />
            <Subtract className="project-arrow-icon" />
          </div>
        </div>
        <div id="row-2" className="projects-box-container two-contain">
          {/* <Link to="/quantify" id="quantify-container" className="project-box"> */}
          <div id="quantify-container" className="project-box" >
            <div id="quantify-textbox" className="project-textbox">
              <div id="quantify-title" className="project-title">
                Quantify
              </div>
              <div id="quantify-subtitle" className="project-subtitle">
                An all-in-one solution to banking on the go
              </div>
            </div>
            <div className="img-container">
              <img src={QuantifyPhone} id='quantify-img' className="project-img"/>
            </div>
            <Subtract className="project-arrow-icon" />
          {/* </Link> */}
          </div>
          <div id="big-o-tires-container" className="project-box">
            <div id="big-o-tires-textbox" className="project-textbox">
              <div id="big-o-tires-title" className="project-title">
                Big O Tires
              </div>
              <div id="big-o-tires-subtitle" className="project-subtitle">
                Optimizing customer awareness of product availability
              </div>
            </div>
            <div id="big-o-img-container" className="img-container">
              <img src={BigOPhone} id='big-o-tires-img' className="project-img"/>
            </div>
            <Subtract className="project-arrow-icon" />
          </div>
        </div>
        <div id="row-3" className="projects-box-container two-contain">
          
          <div id="discover-container" className="project-box">
            <div id="discover-textbox" className="project-textbox">
              <div id="discover-title" className="project-title">
                Discover
              </div>
              {/* <div id="discover-subtitle" className="project-subtitle">
                A reimagined end-to-end omni-channel Soft Pull flow
              </div> */}
            </div>
            <img id="discover-lock" src={LockPNG} loading="lazy" />
            <div id="discover-lockbox">
              
            </div>
            <div id="lockbox-container">
              
              <div className="img-container">
                {/* <img src={DiscoverPhone} id='discover-img' className="project-img"/> */}
              </div>
              {/* <Subtract className="project-arrow-icon" /> */}
            </div>
          </div>
          <div id="fund-container" className="project-box">
            <div id="fund-textbox" className="project-textbox">
              <div id="fund-title" className="project-title">
                Fund
              </div>
              <div id="fund-subtitle" className="project-subtitle">
                Budgeting made simple
              </div>
            </div>
            <div className="img-container">
              <img src={FundPhone} id='fund-img' className="project-img"/>
            </div>
            <Subtract className="project-arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}