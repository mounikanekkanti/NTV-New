/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown7 } from "../../icons/ChevronDown7";
import { ChevronUp } from "../../icons/ChevronUp";
import { Toggle } from "../Toggle";
import "./style.css";

export const Dropdown = ({ open, className, text = "Label", chevronDown7Color = "#98A2B3" }) => {
  return (
    <div className={`dropdown open-${open} ${className}`}>
      <div className="text-2">{text}</div>
      {!open && <ChevronDown7 className="instance-node-2" color={chevronDown7Color} />}

      {open && (
        <>
          <ChevronUp className="instance-node-2" />
          <div className="dropdown-list">
            <div className="dropdown-items">
              <div className="dropdown-list-2">Dropdown 1</div>
              <Toggle active buttonClassName="toggle-instance" className="toggle-2" lable={false} state="default" />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 2</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 3</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 4</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 5</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 6</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 7</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 8</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
            <div className="dropdown-items">
              <div className="dropdown-list-3">Dropdown 9</div>
              <Toggle
                active={false}
                buttonClassName="toggle-instance"
                className="toggle-4"
                lable={false}
                state="default"
                toggleBaseClassName="toggle-3"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  chevronDown7Color: PropTypes.string,
};
