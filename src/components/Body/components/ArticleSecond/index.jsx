import React from 'react'
import { ImageSmall } from '../ImageSmall'
import { BlockText } from '../BlockText'
import styles from './styles.module.scss'

export const ArticleSecond = (props) => {
  const { data } = props

  return (
    <div className={styles.article}>
      <BlockText block={data.block} />
      <ImageSmall image={data.image} />
    </div>
  )
}
