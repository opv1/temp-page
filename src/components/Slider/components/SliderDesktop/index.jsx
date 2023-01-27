import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './styles.module.scss'

export const SliderDesktop = (props) => {
  const { slides } = props

  const sliderRef = useRef(null)

  const [swiper, setSwiper] = useState(null)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isReachBeginning, setIsReachBeginning] = useState(false)
  const [isReachEnd, setIsReachEnd] = useState(false)
  const [direction, setDirection] = useState('')

  const disableScrolling = () => {
    const x = window.scrollX
    const y = window.scrollY

    window.onscroll = function () {
      window.scrollTo(x, y)
    }
  }

  const enableScrolling = () => {
    window.onscroll = function () {}
  }

  const detectMouseWheelDirection = (event) => {
    let delta = null
    let direction = false

    if (!event) {
      event = window.event
    }

    if (event.wheelDelta) {
      delta = event.wheelDelta / 60
    } else if (event.detail) {
      delta = -event.detail / 2
    }

    if (delta !== null) {
      direction = delta > 0 ? 'up' : 'down'
    }

    return direction
  }

  const nextSlide = useCallback(() => {
    swiper.slideNext()
  }, [swiper])

  const prevSlide = useCallback(() => {
    swiper.slidePrev()
  }, [swiper])

  const callback = useCallback(
    (entries) => {
      const [entry] = entries

      setIsIntersecting(() => entry.isIntersecting)

      if (
        (entry.isIntersecting && !isReachEnd && direction === 'down') ||
        (entry.isIntersecting && !isReachBeginning && direction === 'up')
      ) {
        disableScrolling()
      } else {
        enableScrolling()
      }
    },
    [isReachBeginning, isReachEnd, direction],
  )

  const onScroll = useCallback(
    (event) => {
      const dir = detectMouseWheelDirection(event)

      setDirection(dir)

      if (isIntersecting) {
        if (isReachBeginning && direction === 'down') {
          nextSlide()
        }

        if (isReachEnd && direction === 'up') {
          prevSlide()
        }
      }
    },
    [
      direction,
      isIntersecting,
      isReachBeginning,
      isReachEnd,
      nextSlide,
      prevSlide,
    ],
  )

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-300px 0px -300px 0px',
      threshold: 1.0,
    }

    let observerRefValue = null
    const observer = new IntersectionObserver(callback, options)

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
      observerRefValue = sliderRef.current
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue)
      }
    }
  }, [callback, sliderRef, swiper, isReachBeginning, isReachEnd, direction])

  useEffect(() => {
    window.addEventListener('wheel', onScroll)

    return () => {
      window.removeEventListener('wheel', onScroll)
    }
  }, [onScroll, isIntersecting, isReachBeginning, isReachEnd])

  return (
    <div className={styles.slider} ref={sliderRef}>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        spaceBetween={40}
        speed={900}
        onSwiper={(swiper) => {
          setSwiper(swiper)
        }}
        onReachBeginning={() => {
          setIsReachBeginning(() => true)
          setIsReachEnd(() => false)
        }}
        onReachEnd={() => {
          if (isFirstRender) {
            setIsFirstRender(() => false)
            setIsReachBeginning(() => true)
            setIsReachEnd(() => false)
          } else {
            setIsReachBeginning(() => false)
            setIsReachEnd(() => true)
          }
        }}
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
