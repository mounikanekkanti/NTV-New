/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HorizontalTabsItem = ({ selected, className, text = "Tab Name" }) => {
  return (
    <div className={`horizontal-tabs-item selected-${selected} ${className}`}>
      <div className="text">{text}</div>
    </div>
  );
};

HorizontalTabsItem.propTypes = {
  selected: PropTypes.bool,
  text: PropTypes.string,
};
