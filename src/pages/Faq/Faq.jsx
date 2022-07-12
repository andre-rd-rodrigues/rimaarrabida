import React from "react";
import mountain from "assets/images/mountainFaq.png";
import styles from "./faq.module.scss";
import { faqs } from "mocks/local-data";
import Question from "components/AppAccordion/AppAccordion";
import { motion } from "framer-motion";
import {
  containerVariant,
  verticalEntrance,
  horizontalEntrance
} from "styles/motion/variants";

const Faq = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className={styles.container}
      id="faqs"
    >
      <motion.div variants={horizontalEntrance} id="faq-mountain">
        <img src={mountain} alt="" />
      </motion.div>
      <div className={styles.faq}>
        <motion.div variants={verticalEntrance} id="faq-title">
          <span></span>
          <h2>FAQ</h2>
        </motion.div>
        <motion.div
          variants={containerVariant}
          className={styles.questionsContainer}
        >
          {faqs?.map((item, index) => (
            <motion.div variants={horizontalEntrance}>
              <Question
                key={index}
                title={item.question}
                content={item.answer}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faq;
