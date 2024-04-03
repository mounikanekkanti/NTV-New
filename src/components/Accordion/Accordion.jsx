/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { ChevronUp4 } from "../../icons/ChevronUp4";
import "./style.css";

export const Accordion = ({ label = "Label", state, theme, className, chevronUp4Color = "white" }) => {
  return (
    <div className={`accordion ${className}`}>
      <div className="controls">
        {state === "closed" && <ChevronDown className="instance-node-3" color="#98A2B3" />}

        {state === "open" && <ChevronUp4 className="instance-node-3" color={chevronUp4Color} />}

        <div className={`label ${state}`}>{label}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(["closed", "open"]),
  theme: PropTypes.oneOf(["dark"]),
  chevronUp4Color: PropTypes.string,
};
