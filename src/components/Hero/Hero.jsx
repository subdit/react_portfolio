import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, my name is Kasidit Bualoeng</h1>
        <p className={styles.description}>
          I'm a full-stack developer with six years of experience using React,
          Next.js and NodeJS.
        </p>
        <a href='mailto:subdit@gmail.com' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/hero_profile.png')}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
