import './CarouselDesktop.css';
// Light mode assets
import { ReactComponent as Ups } from './../assets/companySvgs/lightMode/UPS.svg';
import { ReactComponent as Discover } from '../assets/companySvgs/lightMode/Discover.svg';
import { ReactComponent as Keurig } from '../assets/companySvgs/lightMode/Keurig.svg';
import { ReactComponent as Disney } from '../assets/companySvgs/lightMode/shopDisney.svg';
import { ReactComponent as Lowes } from '../assets/companySvgs/lightMode/Lowes.svg'
import { ReactComponent as BigO } from '../assets/companySvgs/lightMode/BigOTires.svg'
import { ReactComponent as McDonalds } from '../assets/companySvgs/lightMode/McDonalds.svg'
import { ReactComponent as Verizon } from '../assets/companySvgs/lightMode/Verizon.svg'
import { ReactComponent as Walgreens } from '../assets/companySvgs/lightMode/Walgreens.svg'
// Dark mode assets
import { ReactComponent as UpsD } from './../assets/companySvgs/darkMode/UPSD.svg';
import { ReactComponent as DiscoverD } from '../assets/companySvgs/darkMode/DiscoverD.svg';
import { ReactComponent as KeurigD } from '../assets/companySvgs/darkMode/KeurigD.svg';
import { ReactComponent as DisneyD } from '../assets/companySvgs/darkMode/shopDisneyD.svg';
import { ReactComponent as LowesD } from '../assets/companySvgs/darkMode/LowesD.svg'
import { ReactComponent as BigOD } from '../assets/companySvgs/darkMode/BigOTiresD.svg'
import { ReactComponent as McDonaldsD } from '../assets/companySvgs/darkMode/McDonaldsD.svg'
import { ReactComponent as VerizonD } from '../assets/companySvgs/darkMode/VerizonD.svg'
import { ReactComponent as WalgreensD } from '../assets/companySvgs/darkMode/WalgreensD.svg'

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
            {/* <img loading='lazy' src={walgreens} className='walgreens-png'/> */}
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
            {/* <img loading='lazy' src={walgreens} className='walgreens-png'/> */}
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
            {/* <img loading='lazy' src={walgreens} className='walgreens-png'/> */}
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