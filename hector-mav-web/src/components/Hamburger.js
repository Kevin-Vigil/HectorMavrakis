import React from "react";
// import "./Hamburger.css"

export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      <style jsx="true">{`
      .hamburger{
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 910;
      }
      .burger{
        width: 2rem;
        height: 0.25rem;
        background-color: #151515;
        transform-origin: 1px;
        transition: all 0.3s ease-in;
      }
      .dark-mode .burger{
        background-color: white;
        transition: all 0.25s ease-in;
      }
      .burger1{
        transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      }
      .burger2{
        transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${isOpen ? 0 : 1};
      }
      .burger3{
        transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  
    `}</style>
    </>
  )
}