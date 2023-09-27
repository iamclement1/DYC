import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import { About } from './About'
import AboutDYD from './AboutDYD'
import CampActivity from './CampActivities'
import Sponsor from './Sponsor'
import Timer from './Timer'
import Loader from '../components/Loader/Loader'
// import Speakers from './Speakers'
import BackToTopButton from '../components/BackToTop'
import CampActivitesCarousel from './CampActivitesCarousel'


export default function Landing() {

    const eventDate = '2023-12-17T16:00:00Z'


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Hero />
            <About />
            {/* <CampActivity /> */}
            <CampActivitesCarousel />
            <Timer eventDate={eventDate} />
            {/* <Speakers /> */}

            <Sponsor />
            <AboutDYD />
            <BackToTopButton />
        </div>
    )
}
