import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import { Accordion, Card } from "react-bootstrap";
import styles from "./faq.module.scss";

const Question = ({ content }) => {
  const { answer, question } = content;

  return (
    <Accordion className={styles.accordion}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h5>{question}</h5>
          <AppIcon icon="chevron-down" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>{answer}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Question;
