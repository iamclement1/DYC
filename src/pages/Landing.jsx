import React from 'react'
import Hero from '../components/Hero'
import { About } from './About'
import CampActivity from './CampActivities'


export default function Landing() {
    return (
        <div>
            <Hero />
            <About />
            <CampActivity />
        </div>
    )
}
