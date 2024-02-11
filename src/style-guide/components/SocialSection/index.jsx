"use client"

import React from 'react';
import styles from './style.module.scss';
import Socials from '../../../../socials.json';
import { Icon } from '@iconify/react';


const SocialSection = () => {

    return (
        <>
           <div className={styles.socials}>
            {Socials.map((ele) => {
              return (
                <a href={ele.link} target="_blank" title={ele.name} key={ele.id}>
                  <Icon icon={`cib:${ele.name}`} color="#579" />
                </a>
              );
            })}
          </div>
        </>
    );
};

export default SocialSection;
