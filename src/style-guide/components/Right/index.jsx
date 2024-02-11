import React from 'react'
import styles from './style.module.scss'
import About from '../About'
import Work from '../Work'
import Contact from '../Contact'

const Right = () => {
  return (
    <>
    <div className={styles.right_container}>
      {/* <h1>Right</h1> */}
      <About />
      <Work />
      <Contact />
    </div>
    </>
  )
}

export default Right
