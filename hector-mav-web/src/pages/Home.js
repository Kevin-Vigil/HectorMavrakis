import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import './Home.css'
import '../components/Animations.css'
import Projects from "../components/Projects"

export default function Home(){

    const divStyle_placeholder = {
        height: '85px',
    }

    return(
    <div id="homepage">
    
        <Hero/>

        <Carousel/>

        <Projects/>

        <div className="placeholder" style={divStyle_placeholder}>

        </div>
        <h1>
            HOME
        </h1>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
        <p>
            mobile test
        </p>
    </div>
    )

}