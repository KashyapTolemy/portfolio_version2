import React from 'react'
import styles from './style.module.scss'
import Left from '@/style-guide/components/Left'
import Right from '@/style-guide/components/Right'


const Dummy = () => {
  return (
    <>
      <div className={styles.container}>
          <Left className={styles.left}/>
          <Right className={styles.right}/>
      </div>
    </>
  )
}

export default Dummy
