import './Carousel.css';
import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';
import { useElementOnScreen } from './IntersectionTrigger';


export default function Carousel(props) {

  const [ containerRef, isVisible] = useElementOnScreen({
    rootMargin: "-15% 0% -30% 0%",
    threshold: 0
  })
  console.log(isVisible)
  return (
    <div id="brands" ref={containerRef} className={isVisible? "active-comp" : "inactive-comp"}>
      <div className='caro-text'>
        <div className='text'>EXPERIENCE</div>
        <div className='subtitle'>Brands that I've worked with as clients.</div>
      </div>
        <CarouselDesktop id="caro-desktop" />
        {/* <CarouselMobile id="caro-mobile" /> */}
    </div>
  )
}