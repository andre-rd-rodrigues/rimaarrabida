import AppButton from "components/AppButton/AppButton";
import React from "react";
import mountain from "assets/svg/mountainMoon.svg";
import programa from "assets/docs/programa.pdf";
import scroll from "assets/lotties/scroll.json";
import styles from "./welcome.module.scss";
import Lottie from "components/AppLottie/AppLottie";
import AppContainer from "components/AppContainer/AppContainer";

const Welcome = () => {
  return (
    <AppContainer>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <img
            id="welcome-mountain"
            src={mountain}
            alt="Reunião Internos da Arrabida"
          />
          <div className={styles.content}>
            <div id="welcome-logo">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="RIMA" />
            </div>
            <div>
              <h1>RIMA Meeting ´22</h1>
              <h2>21 Outubro</h2>
              <AppButton icon="download" label="PROGRAMA" download={programa} />
            </div>
          </div>
        </div>
        <Lottie size={230} styles={styles.lottie} animation={scroll} />
      </div>
    </AppContainer>
  );
};

export default Welcome;
