// Theme.jsx
import React from 'react';
import styles from './style.module.scss';

const Theme = ({ setTheme }) => {
    const handleChangeTheme = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className={styles.theme}>
            <select
                name="theme"
                id="theme"
                onChange={handleChangeTheme}
                className={styles.theme_button}
            >
                <option value="dark" className={styles.theme_text}>Dark</option>
                <option value="light" className={styles.theme_text}>Light</option>
            </select>
        </div>
    );
};

export default Theme;
