/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronLeft4 } from "../../icons/ChevronLeft4";
import "./style.css";

export const SubNavItems = ({ label = "Label", state, onClick, className, categoryClassName, chevronLeft4Color = "white" }) => {
  return (
    <div className={`sub-nav-items ${className}`} onClick={onClick}>
      <div className={`category ${categoryClassName}`}>
        <div className="text-icon">
          <ChevronLeft4 className="chevron-left" color={chevronLeft4Color} />
          <div className={`label-2 ${state}`}>{label}</div>
        </div>
      </div>
    </div>
  );
};

SubNavItems.propTypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(["inactive", "active"]),
  chevronLeft4Color: PropTypes.string,
};
