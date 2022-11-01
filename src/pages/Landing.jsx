import React from 'react'
import Hero from '../components/Hero'
import { About } from './About'
import CampActivity from './CampActivities'
import Sponsor from './Sponsor'
import Timer from './Timer'


export default function Landing() {
    return (
        <div>
            <Hero />
            <About />
            <CampActivity />
            <Timer />
            <Sponsor />
        </div>
    )
}
