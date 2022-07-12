import AppContainer from "components/AppContainer/AppContainer";
import AppLottie from "components/AppLottie/AppLottie";
import Title from "components/Title/Title";
import React from "react";
import shape from "assets/lotties/shape.json";
import caduceus from "assets/images/caduceus.png";
import { Row, Col } from "react-bootstrap";
import styles from "./about.module.scss";
import Avatar from "components/Avatar/Avatar";
import { members } from "mocks/local-data";
import {
  containerVariant,
  horizontalEntrance,
  scaleEntrance
} from "styles/motion/variants";

import { motion } from "framer-motion";

const About = () => {
  return (
    <AppContainer>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div variants={horizontalEntrance}>
          <Title label="QUEM SOMOS" />
        </motion.div>
        <div className={styles.about}>
          <Row className="align-items-center justify-content-center">
            <Col md={12} lg={6} sm={12}>
              <motion.div className={styles.shape}>
                <img src={caduceus} alt="Medicina MGF" />
                <AppLottie animation={shape} size={500} />
              </motion.div>
            </Col>
            <Col md={12} lg={6} sm={12}>
              <motion.div
                variants={horizontalEntrance}
                className={styles.presentation}
              >
                <p>RIMA</p>
                <h4>Reunião de Internos de MGF da Arrábia</h4>
                <p>
                  A Reunião de Internos de Medicina Geral e Familiar do ACeS da
                  Arrábida é, tal como o nome indica, composta por médicos
                  internos de formação específica em MGF.
                </p>
                <p>
                  A edição de 2022 será organizada predominantemente por
                  internos do atual 4º ano de formação (do 52º e 54º grupos),
                  bem como por elementos de outros anos.
                </p>
                <p>
                  Assim, e como novidade face à 1ª edição, a comissão
                  organizadora diversifica-se por vários grupos de formação,
                  mesclando a experiência da edição anterior, a determinação da
                  geração que agora termina o internato e a curiosidade de
                  internos de outros anos por forma a garantir a continuidade do
                  projeto.
                </p>
              </motion.div>
            </Col>
          </Row>
        </div>
        <motion.div
          variants={horizontalEntrance}
          className={styles.costumTitle}
        >
          <h2>Organização</h2>
        </motion.div>
        <motion.div variants={containerVariant} className={styles.organization}>
          {members.map((role) => (
            <div id="people-container">
              <motion.h3 variants={horizontalEntrance}>{role.label}</motion.h3>
              <motion.div
                variants={containerVariant}
                id="people-avatar-container"
              >
                {role.people.map(({ name, src }) => (
                  <motion.div variants={scaleEntrance}>
                    <Avatar name={name} src={src} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </AppContainer>
  );
};

export default About;
