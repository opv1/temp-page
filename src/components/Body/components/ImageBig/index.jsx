import React from 'react'
import styles from './styles.module.scss'

export const ImageBig = (props) => {
  const { image } = props

  return (
    <div className={styles.image}>
      <img src={image} alt='alt' />
    </div>
  )
}
