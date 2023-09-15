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

    const eventDate = '2023-12-01T16:00:00Z'


    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div>
            { isLoading && (<Loader />) }
            <Hero />
            <About />
            <CampActivity />
            <Timer eventDate={eventDate} />
            <Speakers />
            
            <Sponsor />
            <AboutDYD />
        </div>
    )
}
