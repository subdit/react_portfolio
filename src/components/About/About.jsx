import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/about_me.png')}
          alt='me & snowboad'
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon' />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                web applications and an extensive landing page design. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt='Server icon' />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast APIs to optimize back-end
                systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='UI icon' />
            <div className={styles.aboutItemText}>
              <h3>CMS | Content management systems </h3>
              <p>
                I have worked across a global team that used CMS to build an
                e-commerce for one of the biggest retail stores in the USA and
                build an application for digital marketing team of financial
                companies. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
