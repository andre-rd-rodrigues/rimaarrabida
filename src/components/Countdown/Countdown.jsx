import React from "react";
import Countdown from "react-countdown";
import styles from "./countdown.module.scss";

const CountdownApp = ({ date }) => {
  const Completionist = () => (
    <p id={styles.encerrado}>Submissões encerradas</p>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className={styles.countdown}>
          <div>
            <span>{days}</span>
            <p>DIAS</p>
          </div>
          <div>
            <span>{hours}</span>
            <p>HORAS</p>
          </div>
          <div>
            <span>{minutes}</span>
            <p>MINUTOS</p>
          </div>
          <div>
            <span>{seconds}</span>
            <p>SEGUNDOS</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <Countdown date={date} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default CountdownApp;
