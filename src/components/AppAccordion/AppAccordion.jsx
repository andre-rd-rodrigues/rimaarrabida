import React from "react";
import { Accordion, Card } from "react-bootstrap";
import AppIcon from "components/AppIcon/AppIcon";
import styles from "./appaccordion.module.scss";

const AppAccordion = ({ title, content }) => {
  return (
    <Accordion className={styles.accordion}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h5>{title}</h5>
          <AppIcon icon="chevron-down" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>{content}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AppAccordion;
