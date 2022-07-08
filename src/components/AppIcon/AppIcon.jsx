import React from "react";
import FeatherIcon from "feather-icons-react";
import colors from "styles/_mixins.scss";

const AppIcon = ({ icon, size = 20, color = "primary" }) => {
  return <FeatherIcon icon={icon} size={size} color={colors[color]} />;
};

export default AppIcon;
