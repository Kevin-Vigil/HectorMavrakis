import './Carousel.css';
import { ReactComponent as Ups } from '../assets/ups.svg';

export default function Carousel(props){
    return(
        <div className='caro-container'>
            <div className='caro-text'>
                <div className='text'>EXPERIENCE</div>
                <div className='subtitle'>Some of the brands that I've worked with.</div>
            </div>
            <div className='carousel'>
                <div className='card-box ups-card-1'>
                    <Ups className="caro-svg"/>
                </div>

            </div>
        </div>
    )
}