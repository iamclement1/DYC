import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ToluMoody from '../assets/ToluMoody.jpg';
import Pade from '../assets/pade.jpg';
import Oludare from '../assets/Oludare.jpg';
export default function Speakers() {
    return (
        <>
            <h3 className='md:text-3xl text-xl font-semibold text-center mt-12'>
                Meet our Speakers
            </h3>
            <hr className='m-4 w-1/6 mx-auto text-3xl' />
            <p className='text-center'>
                Meet our ministers
            </p>
            <Carousel infiniteLoop={true} autoPlay={true} interval={2500} showStatus={false} showThumbs={false}
            emulateTouch={true}>
                <div>
                    <img src={ToluMoody} />
                </div>
                <div>
                    <img src={Pade} />
                </div>
                <div>
                    <img src={Oludare}/>
                </div>
            </Carousel>

        </>
    )
}