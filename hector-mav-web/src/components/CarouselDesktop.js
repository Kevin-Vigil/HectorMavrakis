import './CarouselDesktop.css';
// Light mode assets
import { ReactComponent as Ups } from '../assets/ups.svg';
import { ReactComponent as Discover } from '../assets/discover.svg';
import { ReactComponent as Keurig } from '../assets/keurig.svg';
import { ReactComponent as Disney } from '../assets/disney.svg';
import { ReactComponent as Lowes } from '../assets/lowes.svg'
// Dark mode assets
import { ReactComponent as UpsD } from '../assets/upsD.svg';
import { ReactComponent as DiscoverD } from '../assets/discoverD.svg';
import { ReactComponent as KeurigD } from '../assets/keurigD.svg';
import { ReactComponent as DisneyD } from '../assets/disneyD.svg';
import { ReactComponent as LowesD } from '../assets/lowesD.svg'

import walgreens from '../assets/walgreens.png'
import './Animations.css'

export default function CarouselDesktop(props) {
  return (
    <div id="brands-desktop">
      <div className='carousel-box'>
        <div className='carousel'>
          <div className='card-box'>
            <Ups className="ups-svg" />
            <UpsD className="ups-d-svg" />
          </div>
          <div className='card-box'>
            <Disney className="disney-svg" />
            <DisneyD className="disney-d-svg" />
          </div>
          <div className='card-box'>
            <Keurig className="keurig-svg" />
            <KeurigD className="keurig-d-svg" />
          </div>
          <div className='card-box'>
            <Discover className="discover-svg" />
            <DiscoverD className="discover-d-svg" />
          </div>
          <div className='card-box'>
            <img loading='lazy' src={walgreens} className='walgreens-png'/>
          </div>
          <div className='card-box'>
            <Lowes className='lowes-svg'/>
            <LowesD className='lowes-d-svg' />
          </div>
          <div className='card-box'>
            <Ups className="ups-svg" />
            <UpsD className="ups-d-svg" />
          </div>
          <div className='card-box'>
            <Disney className="disney-svg" />
            <DisneyD className="disney-d-svg" />
          </div>
          <div className='card-box'>
            <Keurig className="keurig-svg" />
            <KeurigD className="keurig-d-svg" />
          </div>
          <div className='card-box'>
            <Discover className="discover-svg" />
            <DiscoverD className="discover-d-svg" />
          </div>
          <div className='card-box'>
            <img loading='lazy' src={walgreens} className='walgreens-png'/>
          </div>
          <div className='card-box'>
            <Lowes className='lowes-svg'/>
            <LowesD className='lowes-d-svg' />
          </div>
          <div className='card-box'>
            <Ups className="ups-svg" />
            <UpsD className="ups-d-svg" />
          </div>
          <div className='card-box'>
            <Disney className="disney-svg" />
            <DisneyD className="disney-d-svg" />
          </div>
          <div className='card-box'>
            <Keurig className="keurig-svg" />
            <KeurigD className="keurig-d-svg" />
          </div>
          <div className='card-box'>
            <Discover className="discover-svg" />
            <DiscoverD className="discover-d-svg" />
          </div>
          <div className='card-box'>
            <img loading='lazy' src={walgreens} className='walgreens-png'/>
          </div>
          <div className='card-box'>
            <Lowes className='lowes-svg'/>
            <LowesD className='lowes-d-svg' />
          </div>
          <div className='card-box'>
            <Ups className="ups-svg" />
            <UpsD className="ups-d-svg" />
          </div>
          <div className='card-box'>
            <Disney className="disney-svg" />
            <DisneyD className="disney-d-svg" />
          </div>
          <div className='card-box'>
            <Keurig className="keurig-svg" />
            <KeurigD className="keurig-d-svg" />
          </div>
          <div className='card-box'>
            <Discover className="discover-svg" />
            <DiscoverD className="discover-d-svg" />
          </div>
          <div className='card-box'>
            <img loading='lazy' src={walgreens} className='walgreens-png'/>
          </div>
          <div className='card-box'>
            <Lowes className='lowes-svg'/>
            <LowesD className='lowes-d-svg' />
          </div>

        </div>
      </div>
    </div>
  )
}