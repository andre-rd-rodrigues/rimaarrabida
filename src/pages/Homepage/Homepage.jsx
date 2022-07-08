import Programa from "pages/Programa/Programa";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./homepage.module.scss";
import Welcome from "./Welcome";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Welcome />
      <Container>
        <Programa />
      </Container>
    </div>
  );
};

export default Homepage;
