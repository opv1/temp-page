import React from 'react'
import { BlockBody } from './components/BlockBody'
import { ArticleFirst } from './components/ArticleFirst'
import { ArticleSecond } from './components/ArticleSecond'
import { Slider } from '../Slider'
import { data } from '../../const'
import styles from './styles.module.scss'

export const Body = () => {
  return (
    <div className={styles.body}>
      {data.map((element) => {
        if (element.type === 'block') {
          return (
            <BlockBody key={element.id} title={element.title}>
              <ArticleFirst data={element.first} />
              <ArticleSecond data={element.second} />
            </BlockBody>
          )
        } else {
          return (
            <BlockBody key={element.id} title={element.title}>
              <Slider slides={element.slides} />
            </BlockBody>
          )
        }
      })}
    </div>
  )
}
