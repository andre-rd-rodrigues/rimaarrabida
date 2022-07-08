import Container from "components/AppContainer/AppContainer";
import Faq from "pages/Faq/Faq";
import Programa from "pages/Programa/Programa";
import React from "react";
import styles from "./homepage.module.scss";
import Welcome from "./Welcome";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Welcome />
      <Container>
        <Programa />
        <Faq />
      </Container>
    </div>
  );
};

export default Homepage;
