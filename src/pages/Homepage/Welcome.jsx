import AppButton from "components/AppButton/AppButton";
import React from "react";
import mountain from "assets/svg/mountainMoon.svg";
import programa from "assets/docs/programa.pdf";
import scroll from "assets/lotties/scroll.json";
import styles from "./welcome.module.scss";
import Lottie from "components/AppLottie/AppLottie";
import AppContainer from "components/AppContainer/AppContainer";
import { motion } from "framer-motion";
import {
  containerVariant,
  horizontalEntrance,
  scaleEntrance
} from "styles/motion/variants";

const Welcome = () => {
  return (
    <AppContainer>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className={styles.container}
      >
        <motion.div variants={horizontalEntrance} className={styles.welcome}>
          <img
            id="welcome-mountain"
            src={mountain}
            alt="Reunião Internos da Arrabida"
          />
          <motion.div variants={containerVariant} className={styles.content}>
            <div id="welcome-logo">
              <motion.img
                variants={scaleEntrance}
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="RIMA"
              />
            </div>
            <div>
              <motion.h1 variants={horizontalEntrance}>
                RIMA Meeting ´22
              </motion.h1>
              <motion.h2 variants={horizontalEntrance}>21 Outubro</motion.h2>
              <motion.div variants={horizontalEntrance}>
                <AppButton
                  icon="download"
                  label="PROGRAMA"
                  downloadLabel="rima_programa.pdf"
                  download={programa}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <Lottie size={230} styles={styles.lottie} animation={scroll} />
      </motion.div>
    </AppContainer>
  );
};

export default Welcome;
