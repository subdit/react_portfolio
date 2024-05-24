import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';
import styles from '../Experience/Experience.module.css';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <p>{skill.title}</p>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyList, id) => {
            return (
              <li key={id} className={styles.historyList}>
                <img
                  src={getImageUrl(historyList.imageSrc)}
                  alt={`${historyList.organization} Logo`}
                />
                <div className={styles.historyListDetails}>
                  <h3>{`${historyList.role}, ${historyList.organization}`}</h3>
                  <p>{`${historyList.startDate} - ${historyList.endDate}`}</p>
                  <ul>
                    {historyList.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
