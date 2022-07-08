import AppButton from "components/AppButton/AppButton";
import React from "react";
import mountain from "assets/icons/mountainMoon.svg";
import logo from "assets/images/logo.png";
import scroll from "assets/lotties/scroll.json";
import styles from "./welcome.module.scss";
import AppLottie from "components/AppLottie/AppLottie";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <img
          id="welcome-mountain"
          src={mountain}
          alt="Reunião Internos da Arrabida"
        />
        <div className={styles.content}>
          <div id="welcome-logo">
            <img src={logo} alt="RIMA" />
          </div>
          <div>
            <h1>RIMA Meeting ´22</h1>
            <h2>21 Outubro</h2>
            <AppButton icon="download" label="PROGRAMA" />
          </div>
        </div>
      </div>
      <AppLottie size={300} styles={styles.lottie} animation={scroll} />
    </div>
  );
};

export default Welcome;
