import Container from "components/AppContainer/AppContainer";
import Title from "components/Title/Title";
import programa from "assets/images/programa_2021.png";
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
                A primeira edição da Reunião de Internos Formação Específica de
                Medicina Geral e Familiar da Arrábida (RIMA) ocorreu no dia 8 de
                Outubro de 2021 com o tema “Viver e Cuidar na Arrábida: O
                Idoso”, que contou com a presença de cerca de 90 participantes,
                via digital.
              </p>
              <p>
                Os internos do 54° grupo organizam-se agora para recriar a
                segunda edição do RIMA, sob o tema “MGF Fora da Caixa”, dando
                seguimento a este evento que se espera continuar a unir
                sucessivas gerações de internos de MGF do ACeS Arrábida ao longo
                dos próximos anos.
              </p>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <img src={programa} alt="I RIMA 2021" />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Editions;
