import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { About } from './About'
import AboutDYD from './AboutDYD'
import CampActivity from './CampActivities'
import Timer from './Timer'
// import Speakers from './Speakers'
import BackToTopButton from '../components/BackToTop'


export default function Landing() {

    const eventDate = '2023-12-17T16:00:00Z'


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Hero />
            <About />
            <CampActivity />
            <Timer eventDate={eventDate} />
            {/* <Speakers /> */}
            <AboutDYD />
            <BackToTopButton />
        </div>
    )
}
