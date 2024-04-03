/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { ArrowRight } from "../../icons/ArrowRight";
import { DeviceConnectivity } from "../../icons/DeviceConnectivity";
import { Globe4 } from "../../icons/Globe4";
import { LayersThree1 } from "../../icons/LayersThree1";
import { MarkerPin63 } from "../../icons/MarkerPin63";
import { Sun } from "../../icons/Sun";
import { ToolbarIcon } from "../ToolbarIcon";
import "./style.css";

export const Toolbar = ({
  active,
  className,
  toolbarIconIcon = <LayersThree1 className="icon-instance-node-2" />,
  override = <DeviceConnectivity className="icon-instance-node-2" />,
  toolbarIconIcon1 = <MarkerPin63 className="icon-instance-node-2" />,
  toolbarIconIcon2 = <Globe4 className="icon-instance-node-2" />,
  toolbarIconIcon3 = <Sun className="icon-instance-node-2" />,
  onSunIconClick,
}) => {
  const handleClickSunIcon = () => {
    // Call the callback function passed from the parent component
    if (onSunIconClick) {
      onSunIconClick();
    }
  };
  return (
    <div className={`toolbar active-3-${active} ${className}`}>
      <div className="toolbar-icon-2">
        {!active && <ArrowLeft className="icon-instance-node-2" color="var(--alias-icon-primary)" />}

        {active && <ArrowRight className="icon-instance-node-2" color="var(--alias-icon-primary)" />}
      </div>
      <ToolbarIcon active className="toolbar-icon-instance" icon={toolbarIconIcon} />
      <ToolbarIcon active={false} className="toolbar-icon-instance" icon={override} />
      <ToolbarIcon active={false} className="toolbar-icon-instance" icon={toolbarIconIcon1} />
      <ToolbarIcon active={false} className="toolbar-icon-instance" icon={toolbarIconIcon2} />
      <ToolbarIcon active={false} className="toolbar-icon-instance" icon={toolbarIconIcon3} onClick={handleClickSunIcon}/>
    </div>
  );
};

Toolbar.propTypes = {
  active: PropTypes.bool,
};
