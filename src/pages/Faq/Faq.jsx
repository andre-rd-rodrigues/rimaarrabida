import React from "react";
import mountain from "assets/images/mountainFaq.png";
import styles from "./faq.module.scss";
import { faqs } from "mocks/local-data";
import Question from "components/AppAccordion/AppAccordion";

const Faq = () => {
  return (
    <div className={styles.container} id="faqs">
      <div id="faq-mountain">
        <img src={mountain} alt="" />
      </div>
      <div className={styles.faq}>
        <div id="faq-title">
          <span></span>
          <h2>FAQ</h2>
        </div>
        <div className={styles.questionsContainer}>
          {faqs?.map((item, index) => (
            <Question key={index} title={item.question} content={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
