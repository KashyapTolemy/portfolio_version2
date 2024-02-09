import React from 'react'
import styles from './style.module.scss'

const Intro = () => {
    return (
        <>
            <div className={styles.intro_container}>
                <div className={styles.name}>Tolemy Kashyap</div>
                <div className={styles.position}>Web Developer & Designer</div>
                <div className={styles.small_intro}>I build (well atleast try to) visually appealing web applications</div>
            </div>
        </>
    )
}

export default Intro
