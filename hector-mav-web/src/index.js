import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import scrollTrigger from "./components/scrollTrigger";

const root = ReactDOM.createRoot(document.getElementById('root'));
function load() {
  document.documentElement.classList.toggle("loadin", true)
  // const aniEnd = document.querySelector("#scroll-container")
  // aniEnd.addEventListener("animationend", (event) => {
  //   if (event.animationName === 'load-in')
  //     document.documentElement.classList.toggle("loadin", false)
  // })
  document.addEventListener('scroll', ()=>{
    console.log("Scroll happened")
    // aniEnd.classList.add("one-time")
  })
  
  // console.log("Inside hero load function for scroll container listener")
  

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
  console.log("Fired DOMContentLoaded in Hero component")
  load();
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
