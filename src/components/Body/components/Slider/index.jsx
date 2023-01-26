import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper'
import 'swiper/css'
import styles from './styles.module.scss'

export const Slider = (props) => {
  const { slides } = props

  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        spaceBetween={40}
        mousewheel={{ releaseOnEdges: true }}
        modules={[Mousewheel]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <img className={styles.image} src={slide.slide} alt='slide' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
