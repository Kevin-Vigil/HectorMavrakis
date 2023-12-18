import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import './Home.css'
import '../components/Animations.css'
import Projects from "../components/Projects"
import '../fonts/Fonts.css'

export default function Home(){

    const divStyle_placeholder = {
        height: '85px',
    }

    return(
    <div id="homepage">
    
        <Hero/>

        <Carousel/>

        <Projects/>

    </div>
    )

}