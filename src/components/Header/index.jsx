import React from 'react'
import logoIcon from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logoIcon} alt='logo' />
        <span className={styles.phone}>+7 (495) 495-49-54</span>
      </div>
    </div>
  )
}
