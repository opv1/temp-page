import React from 'react'
import styles from './styles.module.scss'

export const BlockBody = (props) => {
  const { title, children } = props

  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}
