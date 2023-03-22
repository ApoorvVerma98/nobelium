import React from 'react';
import styles from './HorizontalScroller.module.css';
import jamesbond from './images/james_bond.jpg'
import willsmith from './images/will_smith.png'
import johnwick from './images/jhon_wick.png'
import miketyson from './images/mike_tyson.jpg'
import eminem from './images/eminem.jpg'


const profiles = [
  {
    id: 1,
    name: 'James Bond',
    designation: 'Senior Data Scientist',
    experience: '10 years',
    image : jamesbond,
  },
  {
    id: 2,
    name: 'Will Smith',
    designation: 'Data Analyst',
    experience: '5 years',
    image: willsmith  ,
  },
  {
    id: 3,
    name: 'John Wick',
    designation: 'Machine Learning Engineer',
    experience: '7 years',
    image: johnwick,
  },
  {
    id: 4,
    name: 'Mike Tyson',
    designation: 'Data Scientist',
    experience: '3 years',
    image: miketyson,
  },
  {
    id: 5,
    name: 'Eminem',
    designation: 'Data Engineer',
    experience: '8 years',
    image: eminem,
  },
];

const HorizontalScroller = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Know your Mentor</h1>
      <p className={styles.description}>
        Work with a mentor (senior data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.
      </p>
      <div className={styles.cardsContainer}>
        {profiles.map((profile) => (
          <div key={profile.id} className={styles.card}>
            <img src={profile.image} alt={profile.name} className={styles.image} />
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.designation}>{profile.designation}</p>
            <p className={styles.experience}>{profile.experience} of experience</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;


