import React from 'react'
import useWindowSize from '../../../../hooks/useWindowSize'
import { ImageSmall } from '../ImageSmall'
import { BlockText } from '../BlockText'
import { MOBILE_BREAKPOINT } from '../../../../const'
import styles from './styles.module.scss'

export const ArticleSecond = (props) => {
  const { data } = props

  const { width } = useWindowSize()

  return (
    <div className={styles.article}>
      {width > MOBILE_BREAKPOINT ? (
        <>
          <BlockText block={data.block} />
          <ImageSmall image={data.image} />
        </>
      ) : (
        <>
          <ImageSmall image={data.image} />
          <BlockText block={data.block} />
        </>
      )}
    </div>
  )
}
