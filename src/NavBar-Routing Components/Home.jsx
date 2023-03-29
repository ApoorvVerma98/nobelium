import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <h1>React Router</h1>
        <p>
          React Router is a popular library for building dynamic client-side web
          applications with multiple views or pages.
          <br />
          With React Router, you can easily create routes and navigate between
          them using a declarative approach.
          <br />
          React Router supports multiple types of routing, including traditional
          server-rendered routes, single-page application (SPA) routes, and
          more.
          <br />
          The latest version of React Router (version 6) introduces some changes
          and new features, such as a simplified API and improved nested
          routing.
          <br />
          Whether you're building a small app or a complex web application,
          React Router can help you create a seamless and intuitive user
          experience.
        </p>
      </div>
    </div>
  );
}
export default Home;
