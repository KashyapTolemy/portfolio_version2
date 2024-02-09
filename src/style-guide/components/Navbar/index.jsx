import {React ,useState} from 'react'
import styles from './style.module.scss'
import Link from "next/link";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(
        (typeof window !== "undefined" && window.location.pathname.split("/")[1]) ||
        "home"
      );
    return (
        <>
            <div className={styles.navbar_container}>
                <div className={styles.nav_links}>
                    <Link
                        href="/about"
                        className={`${activeLink === "about" ? styles.activeLink : null}`}
                        onClick={() => {
                            setActiveLink("about");
                            setMobileHamClicked(!mobileHamClicked);
                        }}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/about"
                        className={`${activeLink === "education" ? styles.activeLink : null}`}
                        onClick={() => {
                            setActiveLink("about");
                            setMobileHamClicked(!mobileHamClicked);
                        }}
                    >
                        EDUCATION
                    </Link>
                    <Link
                        href="/about"
                        className={`${activeLink === "projects" ? styles.activeLink : null}`}
                        onClick={() => {
                            setActiveLink("about");
                            setMobileHamClicked(!mobileHamClicked);
                        }}
                    >
                        PROJECTS
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
