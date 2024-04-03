/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Toggle = ({ lable = true, state, active, className, buttonClassName, toggleBaseClassName }) => {
  return (
    <div className={`toggle ${className}`}>
      <div className={`toggle-base state-${state} active-${active} ${toggleBaseClassName}`}>
        <div className={`button ${buttonClassName}`} />
      </div>
      {lable && <div className="text-wrapper-8">Toggle</div>}
    </div>
  );
};

Toggle.propTypes = {
  lable: PropTypes.bool,
  state: PropTypes.oneOf(["disable", "hover", "focus", "default"]),
  active: PropTypes.bool,
};
