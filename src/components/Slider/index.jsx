import React from 'react'
import { SliderDesktop } from './components/SliderDesktop'
import { SliderMobile } from './components/SliderMobile'
import useWindowSize from '../../hooks/useWindowSize'
import { MOBILE_BREAKPOINT } from '../../const'

export const Slider = (props) => {
  const { slides } = props

  const { width } = useWindowSize()

  return (
    <>
      {width > MOBILE_BREAKPOINT ? (
        <SliderDesktop slides={slides} />
      ) : (
        <SliderMobile slides={slides} />
      )}
    </>
  )
}
