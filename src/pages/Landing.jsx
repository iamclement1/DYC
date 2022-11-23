import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import { About } from './About'
import AboutDYD from './AboutDYD'
import CampActivity from './CampActivities'
import Sponsor from './Sponsor'
import Timer from './Timer'
import Loader from '../components/Loader/Loader'
import Speakers from './Speakers'


export default function Landing() {

    const [ isLoading, setIsLoading ] = useState(false);


    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div>
            { isLoading && (<Loader />) }
            <Hero />
            <About />
            <CampActivity />
            {/* <Timer countdownTimestampMs={1659983662000} /> */}
            <Speakers />
            
            <Sponsor />
            <AboutDYD />
        </div>
    )
}
