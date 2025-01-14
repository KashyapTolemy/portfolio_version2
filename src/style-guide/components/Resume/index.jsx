import React from 'react'
import Download from './download'
import styles from './style.module.scss'

const Resume = () => {
  return (
    <>
    <div className={styles.resume_container}>
      <a href='https://drive.google.com/file/d/1rD4f0wm8EnQj98eicsbysyz9YLIkREZk/view?usp=sharing' target="_blank" rel="noopener noreferrer" className={styles.resume}>Download Resume <Download className={styles.download}/></a>
    </div>
    </>
  )
}

export default Resume
