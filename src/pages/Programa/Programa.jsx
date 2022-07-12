import React from "react";
import { Row, Col } from "react-bootstrap";
import { program } from "mocks/local-data";
import styles from "./programa.module.scss";
import { motion } from "framer-motion";
import {
  containerVariant,
  verticalEntrance,
  horizontalEntrance
} from "styles/motion/variants";

const Programa = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className={styles.container}
      id="programa"
    >
      <motion.h2 variants={verticalEntrance}>Programa</motion.h2>
      <motion.span variants={horizontalEntrance} className={styles.break} />

      <Row className={styles.schedule}>
        <Col md={3}>
          <motion.div variants={horizontalEntrance} className="program-date">
            <h3>{program.date}</h3>
          </motion.div>
        </Col>
        <Col md={9}>
          <motion.div
            variants={containerVariant}
            className="program-content-container"
          >
            {program.program?.map((item) => (
              <motion.div variants={verticalEntrance}>
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
              </motion.div>
            ))}
          </motion.div>
        </Col>
      </Row>
      <motion.span variants={horizontalEntrance} className={styles.break} />
    </motion.div>
  );
};

export default Programa;
