import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Registration from './Components/Registration';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/aboutus" style={styles.navLink}>About Us</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
