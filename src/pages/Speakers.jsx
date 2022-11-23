import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slide1 from '../assets/slide.jpg';
import slide2 from '../assets/slide2.jpg';
export default function Speakers() {
    return (
        <>
            <h3 className='md:text-3xl text-xl font-semibold text-center mt-12'>
                Meet our Speakers
            </h3>
            <hr className='m-4 w-1/6 mx-auto text-3xl' />
            <p className='text-center'>
                Meet our ministers Lorem ipsum dolor sit amet..
            </p>
            <Carousel infiniteLoop={true} autoPlay={true} interval={2000} showStatus={false} showThumbs={false}
            emulateTouch={true}>
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                {/* <div>
                    <img src={slide1}/>
                </div> */}
            </Carousel>

        </>
    )
}