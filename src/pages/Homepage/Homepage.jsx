import React from "react";
import styles from "./homepage.module.scss";
import Welcome from "./Welcome";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Welcome />
    </div>
  );
};

export default Homepage;
