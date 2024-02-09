import React from 'react'
import styles from './style.module.scss'
import Intro from '../Intro'
import SocialSection from '../SocialSection'

const Left = () => {
  return (
    <>
      <div className={styles.left_container}>
        <Intro />
        {/* <SocialSection /> */}
      </div>
    </>
  )
}

export default Left
