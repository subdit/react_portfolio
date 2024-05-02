import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kasidit Bualoeng</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React,
          Nex.js and NodeJS. Experience in CMS content management system. Reach
          out if you've new opprotunity or needed support from me!
        </p>
        <a href='mailto:subdit@gmail.com' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
