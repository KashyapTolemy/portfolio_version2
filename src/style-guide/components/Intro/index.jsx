"use client"

import React from 'react'
import styles from './style.module.scss'
import SocialSection from '../SocialSection'
import Navbar from '../Navbar'
import Resume from '../Resume'

const Intro = () => {
    return (
        <>
            <div className={styles.intro_container}>
                <div className={styles.name}>Tolemy Kashyap</div>
                <div className={styles.position}>Web Developer & Designer</div>
                <div className={styles.small_intro}>I build (well atleast try to) visually appealing web apps for my survival.</div>
                <Navbar />
                <Resume />
                <SocialSection />
            </div>
        </>
    )
}

export default Intro
