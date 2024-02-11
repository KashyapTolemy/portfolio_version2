"use client"
import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Main from '@/style-guide/components/Main';
import Theme from '@/style-guide/components/Theme';

const Dummy = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <Theme setTheme={setTheme} />
      <Main />
    </div>
  );
};

export default Dummy;


// useEffect(() => {
//   const moveCursor = (e) => {
//     const { clientX, clientY } = e;
//     const cursor = document.querySelector(`.${styles.cursor}`);
//     if (cursor) {
//       cursor.style.left = `calc(${clientX}px - 120px)`;
//       cursor.style.top = `calc(${clientY}px - 60px)`;
//     }
//   };

//   document.body.addEventListener('pointermove', moveCursor);

//   return () => {
//     document.body.removeEventListener('pointermove', moveCursor);
//   };
// }, []);