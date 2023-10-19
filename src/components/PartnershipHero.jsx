import React from 'react'
import HeroImage from '../assets/DYC_Day3-675.webp'

const PartnershipHero = () => {
   return (
      <React.Fragment>
         <div className='relative md:py-32 py-6 md:h-screen text-center text-white'>
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `url(${HeroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            >
               {/* Black Overlay */}
               <div
                  className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-900 opacity-50" />
            </div>
            {/* Content */}
            <div className="md:py-60 py-64 mb-0 relative z-10">
               <h1 className="md:text-3xl text-2xl font-bold uppercase md:mb-7">
                  Partner With Us
               </h1>
            </div>
         </div>
      </React.Fragment>
   )
}

export default PartnershipHero