import React from 'react';
import styles from './style.module.scss';
import workData from '../../../../work.json';

const Work = () => {
    return (
        <>
            <div className={styles.work_container} id="works">
                {workData.map((work) => (
                    <div className={styles.item_container} key={work.id}>
                        <img src={work.imageSrc} alt={work.altText} className={styles.item_image} />
                        <div className={styles.item_text}>
                            <a href={work.link} target="_blank" rel="noopener noreferrer" className={styles.item_title}>{work.title}</a>
                            <div className={styles.item_description}>{work.description}</div>
                            <div className={styles.item_techstack}>
                                {work.techStack.map((tech, index) => (
                                    <div className={styles.tech} key={index}>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <a href='https://drive.google.com/file/d/1vstJkSGVQQLMX7XTdlWv_aEHQhhO3FUr/view?usp=sharing' target="_blank" rel="noopener noreferrer" className={styles.resume}>DOWNLOAD MY COMPLETE RESUME 🡭</a>

            </div>
        </>
    );
};

export default Work;
