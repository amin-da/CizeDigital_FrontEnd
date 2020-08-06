import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';
import DiscountCart from './DiscountCart'
import ScrollAnimation from 'react-animate-on-scroll';

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "animate.css/animate.min.css";
import "./Deals.scss";
 
import doorbell from '../../../Images/hot_deales/doorbell.jpg'
import flycamera from '../../../Images/hot_deales/flycamera.jpg'
import nova3 from '../../../Images/hot_deales/nova3.jpg'
import speaker from '../../../Images/hot_deales/speaker.jpg'
import headphone_bt from '../../../Images/hot_deales/headphone_bt.jpg'






SwiperCore.use([Navigation,Pagination]);



const Deals = () => {


  return (

    //adding on scroll animation on the component
    //class name animation valilabel on -->  https://animate.style/

    <ScrollAnimation
     className='animate__animated'
     animateIn="animate__fadeInUp" 
     style={{animationDuration:'s'}}>


    <div className='deals_container '>

        <h2>فروش ویژه</h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}

           >
              <SwiperSlide> <DiscountCart src={headphone_bt} title='هدفون بلوتوث'/> </SwiperSlide>
              <SwiperSlide> <DiscountCart src={flycamera} title='دوربین پرنده'/> </SwiperSlide>
              <SwiperSlide> <DiscountCart src={nova3} title='گوشی نوا 3'/> </SwiperSlide>
              <SwiperSlide> <DiscountCart src={doorbell} title='زنگ ویدئویی '/> </SwiperSlide>
              <SwiperSlide> <DiscountCart src={speaker} title=' اسپیکر سخنرانی'/> </SwiperSlide>

         </Swiper>


      
     

    </div>

    </ScrollAnimation>
  
  )
};

export default Deals;
