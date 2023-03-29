import React from "react";
import styles from "./Login-Registration.module.css";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.heading}>Registration</h1>
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
          <label className={styles["form-label"]}>
            Email:
            <input type="email" className={styles["form-input"]} />
          </label>
          <br />
          <button type="submit" className={styles["form-submit"]}>
            Register
          </button>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}
