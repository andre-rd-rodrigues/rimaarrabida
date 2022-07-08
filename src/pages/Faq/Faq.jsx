import React from "react";
import mountain from "assets/images/mountainFaq.png";
import Question from "./Question";
import styles from "./faq.module.scss";
import { faqs } from "mocks/local-data";

const Faq = () => {
  return (
    <div className={styles.container}>
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
            <Question key={index} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
