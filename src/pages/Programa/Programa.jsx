import React from "react";
import { Row, Col } from "react-bootstrap";
import { program } from "mocks/local-data";
import styles from "./programa.module.scss";

const Programa = () => {
  return (
    <div className={styles.container} id="programa">
      <h2>Programa</h2>
      <span className={styles.break} />

      <Row className={styles.schedule}>
        <Col md={3}>
          <div className="program-date">
            <h3>{program.date}</h3>
          </div>
        </Col>
        <Col md={9}>
          <div className="program-content-container">
            {program.program?.map((item) => (
              <div>
                <div className="program-content-event-hour">
                  <p>{item.hour}</p>
                </div>

                <div className="program-content-event">
                  {item.event?.map((ev) => (
                    <p>{ev}</p>
                  ))}
                  {item.speakers?.map((speaker) => (
                    <p className="program-speaker">{speaker}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <span className={styles.break} />
    </div>
  );
};

export default Programa;
