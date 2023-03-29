import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Registration from "./Registration";
import styles from "./NavBar.module.css"; // for navBar

function NavBar() {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/AboutUs" style={styles.navLink}>
                About Us
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Login" style={styles.navLink}>
                Login
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/register" style={styles.navLink}>
                Registration
              </Link>
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

export default NavBar;
