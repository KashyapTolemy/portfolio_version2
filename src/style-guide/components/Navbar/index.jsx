import { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(
        (typeof window !== 'undefined' && window.location.pathname.split('/')[1]) || 'home'
    );

    return (
        <div className={styles.navbar_container}>
            <div className={styles.nav_links}>
                <a
                    href="#about"
                    className={`${activeLink === 'about' ? styles.activeLink : null}`}
                    onClick={() => {
                        setActiveLink('about');
                    }}
                >
                    ABOUT
                </a>
                <a
                    href="#works"
                    className={`${activeLink === 'works' ? styles.activeLink : null}`}
                    onClick={() => {
                        setActiveLink('works');
                    }}
                >
                    WORKS
                </a>
                <a
                    href="#contact"
                    className={`${activeLink === 'contact' ? styles.activeLink : null}`}
                    onClick={() => {
                        setActiveLink('contact');
                    }}
                >
                    CONTACT
                </a>
            </div>
        </div>
    );
};

export default Navbar;
