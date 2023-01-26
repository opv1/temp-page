import React from 'react'
import { ImageBig } from '../ImageBig'
import { BlockText } from '../BlockText'
import styles from './styles.module.scss'

export const ArticleFirst = (props) => {
  const { data } = props

  return (
    <div className={styles.article}>
      <ImageBig image={data.image} />
      <BlockText block={data.block} />
    </div>
  )
}
