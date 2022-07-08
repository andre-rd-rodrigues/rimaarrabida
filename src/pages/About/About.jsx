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

const About = () => {
  return (
    <AppContainer>
      <Title label="QUEM SOMOS" />
      <div className={styles.about}>
        <Row className="align-items-center justify-content-center">
          <Col md={12} lg={6} sm={12}>
            <div className={styles.shape}>
              <img src={caduceus} alt="Medicina MGF" />
              <AppLottie animation={shape} size={500} />
            </div>
          </Col>
          <Col md={12} lg={6} sm={12}>
            <div className={styles.presentation}>
              <p>RIMA</p>
              <h4>Reunião de Internos de MGF da Arrábia</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.costumTitle}>
        <h2>Organização</h2>
      </div>
      <div className={styles.organization}>
        {members.map(({ name, src }) => (
          <Avatar name={name} src={src} />
        ))}
      </div>
    </AppContainer>
  );
};

export default About;
