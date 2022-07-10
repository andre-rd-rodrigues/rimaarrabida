import AppAccordion from "components/AppAccordion/AppAccordion";
import Button from "components/AppButton/AppButton";
import Container from "components/AppContainer/AppContainer";
import Title from "components/Title/Title";
import React from "react";
import styles from "./trabalhos.module.scss";

const Trabalhos = () => {
  return (
    <Container>
      <div
        style={{
          minHeight: "50vh"
        }}
      >
        <Title label="Trabalhos" />
        <div className={styles.submit}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button label="SUBMETER" />
        </div>
        <div className={styles.regulamento}>
          <AppAccordion title="REGULAMENTO DE SUBMISSÃO" content="Something" />
        </div>
      </div>
    </Container>
  );
};

export default Trabalhos;
