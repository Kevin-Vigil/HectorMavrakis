import './Carousel.css';
// Light mode assets
import { ReactComponent as Ups } from '../assets/ups.svg';
import { ReactComponent as Discover } from '../assets/discover.svg';
import { ReactComponent as Keurig } from '../assets/keurig.svg';
import { ReactComponent as Disney } from '../assets/disney.svg';
// Dark mode assets
import { ReactComponent as UpsD } from '../assets/upsD.svg';
import { ReactComponent as DiscoverD } from '../assets/discoverD.svg';
import { ReactComponent as KeurigD } from '../assets/keurigD.svg';
import { ReactComponent as DisneyD } from '../assets/disneyD.svg';
import './Animations.css'

export default function Carousel(props){
    return(
        <div className='caro-container'>
            <div className='caro-text'>
                <div className='text'>EXPERIENCE</div>
                <div className='subtitle'>Some of the brands that I've worked with.</div>
            </div>
            <div className='carousel'>
                <div className='card-box'>
                    <Ups className="ups-svg"/>
                    <UpsD className="ups-d-svg"/>
                </div>
                <div className='card-box'>
                    <Disney className="disney-svg"/>
                    <DisneyD className="disney-d-svg"/>
                </div>
                <div className='card-box'>
                    <Keurig className="keurig-svg"/>
                    <KeurigD className="keurig-d-svg"/>
                </div>
                <div className='card-box'>
                    <Discover className="discover-svg"/>
                    <DiscoverD className="discover-d-svg"/>
                </div>
                <div className='card-box'>
                    <Ups className="ups-svg"/>
                    <UpsD className="ups-d-svg"/>
                </div>
                <div className='card-box'>
                    <Disney className="disney-svg"/>
                    <DisneyD className="disney-d-svg"/>
                </div>
                <div className='card-box'>
                    <Keurig className="keurig-svg"/>
                    <KeurigD className="keurig-d-svg"/>
                </div>
                <div className='card-box'>
                    <Discover className="discover-svg"/>
                    <DiscoverD className="discover-d-svg"/>
                </div>
                <div className='card-box'>
                    <Ups className="ups-svg"/>
                    <UpsD className="ups-d-svg"/>
                </div>
                <div className='card-box'>
                    <Disney className="disney-svg"/>
                    <DisneyD className="disney-d-svg"/>
                </div>
                <div className='card-box'>
                    <Keurig className="keurig-svg"/>
                    <KeurigD className="keurig-d-svg"/>
                </div>
                <div className='card-box'>
                    <Discover className="discover-svg"/>
                    <DiscoverD className="discover-d-svg"/>
                </div>
                

            </div>
        </div>
    )
}