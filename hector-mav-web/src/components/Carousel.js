import './Carousel.css';
import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';


export default function Carousel(props) {
  return (
    <div id="brands" className='active-listener'>
      <div className='caro-text'>
        <div className='text'>EXPERIENCE</div>
        <div className='subtitle'>Brands that I've worked with as clients.</div>
      </div>
        <CarouselDesktop id="caro-desktop" />
        {/* <CarouselMobile id="caro-mobile" /> */}
    </div>
  )
}