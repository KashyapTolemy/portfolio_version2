import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import SunIcon from './sunicon'; 
import MoonIcon from './MoonIcon'; 

const Theme1 = () => {
    const [darkMode, setDarkMode] = useState(false); // Initialize dark mode as true for default dark mode

    useEffect(() => {
        // Set the initial theme when the component mounts
        if (darkMode) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }, []); // Run this effect only once, on mount

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    const setDarkTheme = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
    }

    const setLightTheme = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
    }

    return (
        <div className={styles.dark_mode}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={darkMode} // Initially checked to start with dark mode
            />
            <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'>
                <SunIcon className={styles.sunicon} />
                <MoonIcon className={styles.moonicon} />
            </label>
        </div>
    );
}

export default Theme1;
