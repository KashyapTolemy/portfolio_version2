import { useState, useEffect } from 'react';
import styles from './style.module.scss';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolling...');
            const sections = document.querySelectorAll('section');
            console.log('Sections:', sections);
            let currentActiveLink = 'about';
            const scrollPosition = window.scrollY;
            console.log('Scroll Position:', scrollPosition);
        
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                console.log('Section:', section.id, 'Top:', sectionTop, 'Height:', sectionHeight);
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentActiveLink = section.id;
                }
            });
        
            setActiveLink(currentActiveLink);
            console.log('Active Link:', currentActiveLink);
        };
        

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.navbar_container}>
            <div className={styles.nav_links}>
                <a
                    href="#about"
                    className={activeLink === 'about' ? styles.activeLink : null}
                    onClick={() => setActiveLink('about')}
                >
                    ABOUT
                </a>
                <a
                    href="#works"
                    className={activeLink === 'works' ? styles.activeLink : null}
                    onClick={() => setActiveLink('works')}
                >
                    WORKS
                </a>
                <a
                    href="#contact"
                    className={activeLink === 'contact' ? styles.activeLink : null}
                    onClick={() => setActiveLink('contact')}
                >
                    CONTACT
                </a>
            </div>
        </div>
    );
};

export default Navbar;
