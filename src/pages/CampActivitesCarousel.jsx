import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Fellowship from '../assets/ceremony-1.png';
import Studying from '../assets/studying-1.png';
import Sport from '../assets/football-1.png';
import Communion from '../assets/holy-chalice-1.png';
import Activities from '../assets/activities-1.png';
import Prayer from '../assets/pray-1.png';
import Worship from '../assets/hands-1.png';

import { CampActivities } from '../util/activities';
import { Carousel } from 'react-responsive-carousel';

const CampActivitesCarousel = () => {


   return (
      <Swiper
         slidesPerView={2}
         spaceBetween={30}
         centeredSlides={true}
         pagination={{ clickable: true }}
         loop={true}
         loopAdditionalSlides={2}
         className="mySwiper w-full"
      >
         {CampActivities.map((activity) => (
            <SwiperSlide key={activity.id} className="grid gap-3">
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
