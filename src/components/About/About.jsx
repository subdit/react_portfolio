import React from 'react';

import styles from './About.module.css';
// import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.description}>
          I’m a front-end developer with experience in building responsive and
          optimized sites
        </p>
      </div>
      {/* <div className={styles.content}>
        <h1 className={styles.title}>Backend Developer</h1>
        <p className={styles.description}>
          I have experience developing fast and optimised back-end systems and
          APIs
        </p>
      </div>
      <div className={styles.content}></div> */}
    </section>
  );
};

export default About;
