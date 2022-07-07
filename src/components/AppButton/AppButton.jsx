import React from "react";
import FeatherIcon from "feather-icons-react";
import styles from "./appbutton.module.scss";

const AppButton = ({ label, icon }) => {
  return (
    <button className={styles.button}>
      {icon && <FeatherIcon icon={icon} size={20} />}
      {label}
    </button>
  );
};

export default AppButton;
