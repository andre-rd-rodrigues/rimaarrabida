import regulamento from "assets/docs/regulamento.pdf";
import Button from "components/AppButton/AppButton";
import Container from "components/AppContainer/AppContainer";
import CountdownApp from "components/Countdown/Countdown";
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
            A data limite para a submissão dos resumos é <b>31/08/2022</b>.{" "}
            Consulta o regulamento para saberes como.
          </p>
          <CountdownApp />
          <Button label="REGULAMENTO" icon="download" download={regulamento} />
        </div>
      </div>
    </Container>
  );
};

export default Trabalhos;
