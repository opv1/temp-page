import React from 'react'
import styles from './styles.module.scss'

export const BlockText = (props) => {
  const { block } = props

  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{block.title}</h3>
      <div className={styles.texts}>
        {block.texts.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}
