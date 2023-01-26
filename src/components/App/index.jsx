import React from 'react'
import { Header } from '../Header'
import { Body } from '../Body'
import { Footer } from '../Footer'
import styles from './styles.module.scss'

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
