import React from 'react';
import styles from './style.module.scss';


const Firefly = () => {
  return (
    <>
      {[...Array(20)].map((_, index) => (
        <div key={index} className={styles.firefly}></div>
      ))}
    </>
  );
};

export default Firefly;
