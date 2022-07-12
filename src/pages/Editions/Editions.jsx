import Container from "components/AppContainer/AppContainer";
import Title from "components/Title/Title";
import programa from "assets/images/programa_2021.png";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./editions.module.scss";
import {
  containerVariant,
  horizontalEntrance,
  verticalEntrance
} from "styles/motion/variants";

import { motion } from "framer-motion";

const Editions = () => {
  return (
    <Container>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className={styles.innerContainer}
      >
        <motion.div variants={horizontalEntrance}>
          <Title label="EDIÇÕES" />
        </motion.div>

        <motion.div variants={containerVariant} className={styles.editions}>
          <Row>
            <Col md={6} sm={12} lg={6}>
              <motion.div variants={horizontalEntrance}>
                <h2> I RIMA</h2>

                <span>2021</span>
              </motion.div>
              <motion.div variants={horizontalEntrance}>
                <p variants={horizontalEntrance}>
                  A primeira edição da Reunião de Internos Formação Específica
                  de Medicina Geral e Familiar da Arrábida (RIMA) ocorreu no dia
                  8 de Outubro de 2021 com o tema “Viver e Cuidar na Arrábida: O
                  Idoso”, que contou com a presença de cerca de 90
                  participantes, via digital.
                </p>
                <p variants={horizontalEntrance}>
                  Os internos do 54° grupo organizam-se agora para recriar a
                  segunda edição do RIMA, sob o tema “MGF Fora da Caixa”, dando
                  seguimento a este evento que se espera continuar a unir
                  sucessivas gerações de internos de MGF do ACeS Arrábida ao
                  longo dos próximos anos.
                </p>
              </motion.div>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <motion.img
                variants={verticalEntrance}
                src={programa}
                alt="I RIMA 2021"
              />
            </Col>
          </Row>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Editions;
