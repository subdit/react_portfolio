import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container}>
      <h2>About</h2>
      <div>
        <img src={getImageUrl('about/snow_board.jpg')} alt='snow boarding' />
        <div>
          <ul>
            <li>
              <img src={getImageUrl('about/curcorIcon.png')} alt='Cursor' />
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I'm frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
