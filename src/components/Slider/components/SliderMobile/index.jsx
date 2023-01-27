import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './styles.module.scss'

export const SliderMobile = (props) => {
  const { slides } = props

  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1.5}
        spaceBetween={30}
        setWrapperSize
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
