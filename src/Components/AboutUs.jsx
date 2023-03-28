import React from 'react';
import styles from './AboutUs.module.css'; 


function AboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles.profile}>
        <img className={styles.profilePicture} src="" alt="" />
        <div className={styles.profileInfo}>
          <p>Age: 25</p>
          <p>Location: India</p>
        </div>
      </div>
      <div className={styles.bio}>
        <p>Hi, I'm Apoorv Verma, from Patna, Bihar live in Bangalore. Currently a trainee at FunctionUp, 
        I have developed a keen interest in Coding. 
        When I'm not working, I enjoy watching webseries or playing any pc games.</p>
      </div>
      <div className={styles.skills}>
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className={styles.hobbies}>
        <h3>Hobbies</h3> 
        <ul>
          <li>Reading</li>
          <li>Writing Blogs</li>
          <li>Photography</li>
          <li>Playing guitar</li>
          <li>Playing Basketball</li>
        </ul>
      </div>
      <div className={styles.definition}>
        <h3>React.js</h3>
        <p>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components 
        and manage the state of those components efficiently. React uses a virtual DOM to update the UI efficiently, 
        making it a popular choice for building single-page applications and complex user interfaces.</p>
      </div>
    </div>
  );
}


export default AboutUs;