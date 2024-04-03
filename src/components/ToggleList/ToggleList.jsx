/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Toggle } from "../Toggle";
import "./style.css";

export const ToggleList = ({
  className,
  text = "Placeholder",
  hasOption = true,
  hasDiv = true,
  visible = true,
  toggleActive = true,
  hasOption1 = true,
  hasOption2 = true,
  hasOption3 = true,
  hasOption4 = true,
}) => {
  return (
    <div className={`toggle-list ${className}`}>
      <div className="option">
        <div className="placeholder">{text}</div>
        <Toggle active={toggleActive} className="toggle-5" lable={false} state="default" />
      </div>
      <div className="option">
        <div className="placeholder">{text}</div>
        <Toggle active className="toggle-5" lable={false} state="default" />
      </div>
      {hasOption1 && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}

      {hasOption2 && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}

      {hasOption3 && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}

      {hasOption4 && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}

      {hasOption && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}

      {hasDiv && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}

      {visible && (
        <div className="option">
          <div className="placeholder">{text}</div>
          <Toggle active className="toggle-5" lable={false} state="default" />
        </div>
      )}
    </div>
  );
};

ToggleList.propTypes = {
  text: PropTypes.string,
  hasOption: PropTypes.bool,
  hasDiv: PropTypes.bool,
  visible: PropTypes.bool,
  toggleActive: PropTypes.bool,
  hasOption1: PropTypes.bool,
  hasOption2: PropTypes.bool,
  hasOption3: PropTypes.bool,
  hasOption4: PropTypes.bool,
};
