import './AboutMe.css'
import './Animations.css'
import '../fonts/Fonts.css'

import { ReactComponent as ComputerIcon } from '../assets/computer.svg'
import { ReactComponent as DataIcon } from '../assets/dataBlocks.svg'
import { ReactComponent as PenIcon } from '../assets/pen.svg'

export default function About(){
  return(
    <div id='about' className='active-listener'>
      <div id='about-textbox'>
        <div id='about-title'>ABOUT ME</div>
        <div id='about-statement'>An ambitious, data-driven designer.</div>
      </div>
      <div id='about-point-container'>
        <div id='about-multi-plat-container' className='point-box'>
          <ComputerIcon id="platform-icon"/>
          <div id='platform-textbox' className='points-textbox'>
            <div id='platform-title' className='points-title'>Multi-platform</div>
            <div id='platform-statement' className='points-statement'>A strong understanding of designs across platforms and viewports</div>
          </div>
        </div>
        <div id='about-dev-ready-container' className='point-box'>
          <DataIcon id="dev-icon"/>
          <div id='dev-textbox' className='points-textbox'>
            <div id='dev-title' className='points-title'>Dev-ready</div>
            <div id='dev-statement' className='points-statement'>Experience in development handoffs with internal and external clients</div>
          </div>
        </div>
        <div id='about-visual-container' className='point-box'>
          <PenIcon id="design-icon"/>
          <div id='design-textbox' className='points-textbox'>
            <div id='design-title' className='points-title'>Hybrid skill set</div>
            <div id='design-statement' className='points-statement'>Proficient in both UX and UI form start to launch of products/services</div>
          </div>
        </div>
      </div>
    </div>
  )
}