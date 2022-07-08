import React from "react";
import styles from "./title.module.scss";

const Title = ({ label }) => {
  return (
    <div className={styles.title}>
      <h1>{label}</h1>
    </div>
  );
};

export default Title;
