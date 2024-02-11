"use client"
import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Main from '@/style-guide/components/Main';
import Theme from '@/style-guide/components/Theme';
import Theme1 from '@/style-guide/components/Theme1';
// import Firefly from '@/style-guide/components/Firefly';

const Dummy = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const cursor = document.querySelector(`.${styles.cursor}`);
      if (cursor) {
        cursor.style.left = `calc(${clientX}px - 0px)`;
        cursor.style.top = `calc(${clientY}px - 0px)`;
      }
    };
  
    document.body.addEventListener('pointermove', moveCursor);
  
    return () => {
      document.body.removeEventListener('pointermove', moveCursor);
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <div className={styles.cursor}></div>
      {/* <Theme setTheme={setTheme} /> */}
      <Theme1 />
      <Main />
      {/* <Firefly /> */}
    </div>
  );
};

export default Dummy;

