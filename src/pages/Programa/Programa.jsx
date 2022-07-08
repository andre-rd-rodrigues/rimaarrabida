import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./programa.module.scss";

const Programa = () => {
  const data = {
    date: "QUIT 21 OUT",
    program: [
      {
        hour: "08:00 - 9:00",
        event: ["Abertura do Secretariado"],
        speakers: undefined
      },
      {
        hour: "09:00 - 10:00",
        event: [
          "Sessão Plenária - Que dor de cabeça! - Highlights sobre Cefaleias"
        ],
        speakers: ["Palestrante: Drª Andreia Costa"]
      },
      {
        hour: "10:00 - 12:00",
        event: [
          "Mesa Redonda",
          "Cuidados de Saúde Primários - Qual o futuro em Portugal ?"
        ],
        speakers: [
          "Palestrantes: Prof. Dr. Paulo Santos e Dr. Nuno Jacinto",
          "Moderadora: Profª Drª Luísa Sá"
        ]
      }
    ]
  };

  return (
    <div className={styles.container}>
      <h2>Programa</h2>
      <span className={styles.break}></span>

      <Row className={styles.schedule}>
        <Col md={3}>
          <div className="program-date">
            <h3>{data.date}</h3>
          </div>
        </Col>
        <Col md={9}>
          <div className="program-content-container">
            {data.program?.map((item) => (
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

      <span className={styles.break}></span>
    </div>
  );
};

export default Programa;
