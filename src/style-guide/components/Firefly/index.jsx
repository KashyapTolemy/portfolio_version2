import React from 'react';
import styles from './style.module.scss';

const Firefly = () => {
const quantity = 15;

    return (
        <div className={`canvas ${styles.Firefly}`}>
            {[...Array(quantity)].map((_, index) => (
                <div className={styles.firefly} key={index}></div>
            ))}
        </div>
    );
};

export default Firefly;
