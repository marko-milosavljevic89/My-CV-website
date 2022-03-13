import React from 'react'
import './funfacts.css'
import AVTR1 from '../../assets/activity1.jpg'
import AVTR2 from '../../assets/activity2.jpg'
import AVTR3 from '../../assets/activity3.jpg'
import AVTR4 from '../../assets/activity4.jpg'
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name: 'I used to sing opera',
    review: 'This is me singing Le Nozze di Figaro at Kolarac, Belgrade in 2012.'
  },
  {
    avatar:AVTR2,
    name: 'I have a cat',
    review: 'This is my lazy pet, Misha.'
  },
  {
    avatar:AVTR3,
    name: 'I do illustrations in my free time',
    review: 'Since childhood, I have enjoyed creating various characters.'
  },
  {
    avatar:AVTR4,
    name: 'Swimming is my way of relaxing',
    review: 'I was training competetive swimming for years.'
  }
]

const FunFacts = () => {
  return (
    <section id='funfacts'>
      <h5>Until i have grown more as a developer, here are</h5>
      <h2>Some Fun Facts About Me</h2>

      <Swiper className="container funfacts__container"
      // install Swiper modules
      modules={[ Pagination, Navigation ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='funfacts'>
              <div className="fun__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <div>
              <h5>{name}</h5>
              <small className='fun__content'>
              {review}
              </small>
              </div>
            </SwiperSlide>
            )
          })
        }        
      </Swiper>
    </section>
  )
}

export default FunFacts