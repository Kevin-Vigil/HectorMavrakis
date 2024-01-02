import './Carousel.css';
import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';


export default function Carousel(props) {
  return (
    <div id="brands">
      <div className='caro-text'>
        <div className='text'>EXPERIENCE</div>
        <div className='subtitle'>Some of the brands that I've worked with.</div>
      </div>
      <CarouselDesktop id="caro-desktop" />
      <CarouselMobile id="caro-mobile" />
    </div>
  )
}