/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Placeholder2 } from "../../icons/Placeholder2";
import "./style.css";

export const ToolbarIcon = ({ active, className, icon = <Placeholder2 className="placeholder-2" color="red" />, onClick }) => {
  return <div className={`toolbar-icon active-2-${active} ${className}`} onClick={onClick}>{icon}</div>;
};

ToolbarIcon.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
