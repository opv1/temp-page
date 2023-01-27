import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { MOBILE_BREAKPOINT } from '../../const'
import logoIcon from '../../assets/logo.png'
import logoMobileIcon from '../../assets/logo-mobile.png'
import phoneIcon from '../../assets/phone.png'
import styles from './styles.module.scss'

export const Header = () => {
  const { width } = useWindowSize()

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        {width > MOBILE_BREAKPOINT ? (
          <>
            <img className={styles.logo} src={logoIcon} alt='logo' />
            <span className={styles.phone}>+7 (495) 495-49-54</span>
          </>
        ) : (
          <>
            <img className={styles.logo} src={logoMobileIcon} alt='logo' />
            <img src={phoneIcon} alt='phone' />
          </>
        )}
      </div>
    </div>
  )
}
