import React from 'react';
import getImageUrl from '../../utils';

function Hero() {
  return (
    <section>
      <h1>Hi, I &apos m Kasidit B.</h1>
      <p>
        I &apos m a full-stack developer with 4 years of experience with React,
        Angular, Java and CMS. Please reach out if you have any questions.
      </p>
      <a href={getImageUrl('hero/heroImage.png')} alt='hero_image'>
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
