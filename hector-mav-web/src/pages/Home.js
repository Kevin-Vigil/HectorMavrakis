import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import './Home.css'
import '../components/Animations.css'
import Projects from "../components/Projects"
import '../fonts/Fonts.css'
import About from "../components/AboutMe"
import Footer from "../components/Footer"
import scrollTrigger from "../components/scrollTrigger"

export default function Home() {

  function load(){
    const options={
      rootMargin: "-30% 0% -30% 0%",
      threshold: 0 
    }
    scrollTrigger(".active-listener", options, false);
    
  }
  window.addEventListener("DOMContentLoaded", ()=>{
    load()
  });
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <div id="homepage">

      <Hero />

      <Carousel />

      <Projects />

      <About/>

      <Footer/>
      
    </div>
  )

}