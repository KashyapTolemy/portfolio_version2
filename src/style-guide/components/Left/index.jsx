import React from 'react'
import styles from './style.module.scss'
import Intro from '../Intro'

const Left = () => {
  return (
    <>
      <div className={styles.left_container}>
        <Intro />
      </div>
    </>
  )
}

export default Left
