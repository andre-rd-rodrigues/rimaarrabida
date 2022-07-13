import regulamento from "assets/docs/regulamento.pdf";
import Button from "components/AppButton/AppButton";
import Container from "components/AppContainer/AppContainer";
import CountdownApp from "components/Countdown/Countdown";
import Title from "components/Title/Title";
import React from "react";
import styles from "./trabalhos.module.scss";
import { containerVariant, horizontalEntrance } from "styles/motion/variants";

import { motion } from "framer-motion";

const Trabalhos = () => {
  return (
    <Container>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        style={{
          minHeight: "60vh"
        }}
      >
        <motion.div variants={horizontalEntrance}>
          <Title label="Trabalhos" />
        </motion.div>
        <motion.div variants={horizontalEntrance} className={styles.submit}>
          <p>
            A data limite para a submissão dos resumos é <b>31/08/2022</b>.{" "}
            Consulta o regulamento para saberes como.
          </p>
          <CountdownApp date={new Date(2022, 8, 31)} />
          <Button label="REGULAMENTO" icon="download" download={regulamento} />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Trabalhos;
