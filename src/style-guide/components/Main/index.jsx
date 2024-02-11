import React from 'react'
import Left from '../Left'
import Right from '../Right'
import styles from './style.module.scss'

const Main = () => {
  return (
    <>
      <div className={styles.main_container}>
        <Left />
        <Right />
      </div>
    </>
  )
}

export default Main
