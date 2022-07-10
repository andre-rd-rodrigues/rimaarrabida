import React from "react";
import FeatherIcon from "feather-icons-react";
import styles from "./appbutton.module.scss";

const AppButton = ({ label, icon, link, download }) => {
  const Content = () => (
    <>
      {icon && <FeatherIcon icon={icon} size={20} />}
      {label}
    </>
  );
  const renderBody = () => {
    if (link)
      return (
        <a href={link} target="_">
          <Content />
        </a>
      );
    if (download)
      return (
        <a href={download} download="rima_programa_2022" target="_">
          <Content />
        </a>
      );
    return (
      <>
        <Content />
      </>
    );
  };
  return <button className={styles.button}>{renderBody()}</button>;
};

export default AppButton;
