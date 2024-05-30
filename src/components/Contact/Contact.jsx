import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2> Contact</h2>
        <p>Feel free to reach out</p>
        <span>KasiditB©2024 | All Rights Reserved</span>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon' />
          <a href='mailto:subdit@gmail.com'>subdit@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt='Linkedin Icon'
          />
          <a href='https://www.linkedin.com/in/kasidit-bualoeng'>
            Linkedin.com/Kasidit | bualoeng
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt='Github Icon' />
          <a href='https://github.com/subdit'>GitHub.com/subdit</a>
        </li>
      </ul>
    </footer>
  );
};
