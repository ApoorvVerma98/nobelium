import React from 'react';
import Test from './Components/Test';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Test />
      </div>
    </div>
  );
};

export default App;
