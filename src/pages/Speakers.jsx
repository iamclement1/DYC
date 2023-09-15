import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ToluMoody from '../assets/ToluMoody.jpg';
import Pade from '../assets/pade.jpg';
import Oludare from '../assets/Oludare.jpg';
export default function Speakers() {
    return (
        <div id="speakers">
            <h3 className='md:text-3xl text-xl font-semibold text-center mt-12'>
                Meet our Speakers
            </h3>
            <hr className='m-4 w-1/6 mx-auto text-3xl' />
            {/* <p className='text-center'>
                Meet our ministers
            </p> */}
            <Carousel infiniteLoop={true} autoPlay={true} interval={2500} showStatus={false} showThumbs={false}
                emulateTouch={true}>
                <div>
                    <img src={ToluMoody} />
                </div>
                <div>
                    <img src={Pade} />
                </div>
                <div>
                    <img src={Oludare} />
                </div>
            </Carousel>

            <main>
                <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center md:text-2xl text-md md:p-0 p-3 font-semibold">
                    Worried about what to come to the convention with?
                </h3>
                <p className="text-center md:p-0 p-3">
                    Here's a list of items to come with...
                </p>
                <div className="md:flex md:w-4/6 md:p-0 p-6 md:m-0 m-2 justify-between md:mx-auto">
                    <div className='md:w-4/6 '>
                        <h3 className="text-gray-500 text-2xl font-semibold uppercase md:text-left text-center  ">
                            Mandaory
                        </h3>
                        <ul className='md:text-left text-center'>
                            <li>Bible & Jotter</li>
                            <li>Toiletries</li>
                            <li>Comfortable & decent outfits (inclusive of sport wear for morning workouts).</li>
                            <li>Comfortable footwear</li>
                            <li>Bathing Towel</li>
                            <li>Bedsheet and Covering Cloth.</li>
                            <li>Scarf, Baret or Face Cap (for ladies)</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className="text-gray-500 text-2xl font-semibold uppercase md:text-left text-center md:mt-0 mt-5">
                            Optional
                        </h3>
                        <ul className='md:text-left text-center'>
                            <li>Bathing Bucket & Bowl</li>
                            <li>Pillow.</li>
                            <li>Sweaters & Socks.</li>
                            <li>Plater & Cultery.   </li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>
    )
}