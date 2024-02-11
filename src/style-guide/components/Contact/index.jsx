"use client"
import { React, useState } from 'react'
import styles from './style.module.scss'

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();
    const [subject, setSubject] = useState();
    return (
        <>
            <div className={styles.contact_container} id="contact">
                <form
                    action="https://formsubmit.co/kashyaptolemy@gmail.com"
                    method="POST"
                    className={styles.contact_form}
                >
                    <div className={styles.contact_item}>
                        <div className={styles.contact_title}>NAME </div>
                        <input
                            type="text"
                            placeholder=""
                            value={name}
                            name="name"
                            className={styles.contact_place}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.contact_item}>
                        <div className={styles.contact_title}>EMAIL </div>
                        <input
                            type="email"
                            placeholder=""
                            value={email}
                            name="email"
                            className={styles.contact_place}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.contact_areaitem}>
                        <div className={styles.contact_title}>LET'S COOK SOMETHING TOGETHER</div>
                        <textarea
                            name="msg"
                            id="msg"
                            cols="30"
                            rows="10"
                            placeholder="How you Doin'"
                            className={styles.contact_area}
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.contact_submit}>
                        SUBMIT
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact
