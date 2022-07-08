import Container from "components/AppContainer/AppContainer";
import Title from "components/Title/Title";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./editions.module.scss";

const Editions = () => {
  return (
    <Container>
      <div className={styles.innerContainer}>
        <Title label="EDIÇÕES" />

        <div className={styles.editions}>
          <Row>
            <Col md={6} sm={12} lg={6}>
              <h2> I RIMA</h2>
              <span>2021</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                ad quod placeat consectetur sapiente libero distinctio aut alias
                eveniet culpa? Ratione commodi temporibus nam provident repellat
                quasi laboriosam quas quo?
              </p>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <img
                src="https://rural-urban.eu/sites/default/files/Simple%20programme_09_14.png"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Editions;
