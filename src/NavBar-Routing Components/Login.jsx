import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login-Registration.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.heading}>Login</h1>
        <form>
          <label className={styles["form-label"]}>
            Username:
            <input type="text" className={styles["form-input"]} />
          </label>
          <br />
          <label className={styles["form-label"]}>
            Password:
            <input type="password" className={styles["form-input"]} />
          </label>
          <br />
          <button type="submit" className={styles["form-submit"]}>
            Submit
          </button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
