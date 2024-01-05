import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import './Home.css'
import '../components/Animations.css'
import Projects from "../components/Projects"
import '../fonts/Fonts.css'
import About from "../components/AboutMe"
import Footer from "../components/Footer"


export default function Home() {

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