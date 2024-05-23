import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div>
        <div>
          {skills.map((skill, id) => {
            return (
              <div key={id}>
                <p>{skill.title}</p>
                <div>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
              </div>
            );
          })}
        </div>
        <ul>
          {history.map((historyList, id) => {
            return (
              <li key={id}>
                <img
                  src={getImageUrl(historyList.imageSrc)}
                  alt={`$(historyItem.organisation) Logo`}
                />
                <div>
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
