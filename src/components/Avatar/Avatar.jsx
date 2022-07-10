import React from "react";
import { Image } from "react-bootstrap";
import styles from "./avatar.module.scss";

const Avatar = ({ src, name, size = 200 }) => {
  return (
    <div
      className={styles.avatar}
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      <p>{name}</p>
    </div>
  );
};

export default Avatar;
