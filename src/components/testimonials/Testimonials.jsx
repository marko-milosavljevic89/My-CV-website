import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
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
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea beatae maiores, consectetur praesentium quilbusdam, commodi velit porro blanditiis consequatur qui molestiae. DDolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar:AVTR2,
    name: 'Eleonora Krieg',
    review: 'Modi alias animi dolorem aliquam ea beatae maiores, consectetur praesentium quilbusdam, commodi velit porro blanditiis consequatur qui molestiae. DDolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar:AVTR3,
    name: 'Sakura Haruno',
    review: 'Modi alias animi dolorem aliquam ea beatae maiores, consectetur praesentium quilbusdam, commodi velit porro blanditiis consequatur qui molestiae. DDolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar:AVTR4,
    name: 'Skeet Delmaar',
    review: 'Modi alias animi dolorem aliquam ea beatae maiores, consectetur praesentium quilbusdam, commodi velit porro blanditiis consequatur qui molestiae. DDolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
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
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>
              {review}
              </small>
            </SwiperSlide>
            )
          })
        }        
      </Swiper>
    </section>
  )
}

export default Testimonials