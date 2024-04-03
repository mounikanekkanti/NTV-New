/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../../icons/Logo";
import { Menu2 } from "../../icons/Menu2";
import { User } from "../../icons/User";
import "./style.css";

export const Header = ({ className, menu2Color = "#98A2B3", userColor = "#98A2B3" }) => {
  return (
    <div className={`header ${className}`}>
      <Menu2 className="icon-instance-node-3" color={menu2Color} />
      <Logo className="logo-instance" />
      <div className="text-wrapper-9">Network Topology Visualizer</div>
      <div className="user-2">
        <div className="text-wrapper-10">Welcome back, Ben</div>
        <User className="icon-instance-node-3" color={userColor} />
      </div>
    </div>
  );
};

Header.propTypes = {
  menu2Color: PropTypes.string,
  userColor: PropTypes.string,
};
