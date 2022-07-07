import React from "react";
import Lottie from "react-lottie";

const AppLottie = ({ styles, animation, size }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles}>
      <Lottie
        isClickToPauseDisabled
        options={defaultOptions}
        height={size}
        width={size}
      />
    </div>
  );
};

export default AppLottie;
