import React from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import { About } from './About'
import AboutDYD from './AboutDYD'
import CampActivity from './CampActivities'
import Sponsor from './Sponsor'
import Timer from './Timer'


export default function Landing() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div>
            <Hero />
            <About />
            <CampActivity />
            {/* <Timer countdownTimestampMs={1659983662000} /> */}
            
            <Sponsor />
            <AboutDYD />
        </div>
    )
}
