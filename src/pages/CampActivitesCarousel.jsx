import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { CampActivities } from '../util/activities';

const CampActivitesCarousel = () => {


   return (
      <Swiper
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
         fadeEffect={true} // Enable fade effect if desired
         loop={true}
         // slidesPerView={2}
         // spaceBetween={30}
         // centeredSlides={true}
         loopadditionalslides={2}
      // className="mySwiper w-full"
      >
         {CampActivities.map((activity) => (
            <SwiperSlide key={activity.id} className="grid gap-3 pt-6">
               <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4 h-40">
                  <img src={activity.img} alt={activity.title} className="w-24 mx-auto" />
                  <p className="uppercase text-sm mx-auto py-2 font-semibold text-gray-600">
                     {activity.title}
                  </p>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default CampActivitesCarousel;
