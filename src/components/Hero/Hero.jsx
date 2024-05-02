import React from 'react';

import styles from './Hero.module.css';
import getImageUrl from '../../utils';

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I &apos m Kasidit B.</h1>
        <p className={styles.description}>
          I &apos m a full-stack developer with 5 years of experience with
          React, Angular, Java and CMS. Please reach out if you have new
          opportunity.
        </p>
        <a href='mailto:myemail@email.com'>Contact Me</a>
      </div>
      <img
        src={getImageUrl('hero/hero_image.png')}
        alt='hero_image'
        className='{styles.heroImg}'
      />
      <div className={styles.topBlurr}></div>
      <div className={styles.bottomBlurr}></div>
    </section>
  );
}
