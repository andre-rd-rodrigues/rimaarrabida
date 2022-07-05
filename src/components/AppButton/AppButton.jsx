import React from "react";
import styles from "./appbutton.module.scss";

const AppButton = ({ text, icon }) => {
  return (
    <button className={styles.appbutton}>
      {icon}
      {text}
    </button>
  );
};

export default AppButton;
