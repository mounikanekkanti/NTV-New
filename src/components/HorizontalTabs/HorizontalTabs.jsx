/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HorizontalTabsItem } from "../HorizontalTabsItem";
import "./style.css";

export const HorizontalTabs = ({
  className,
  horizontalTabsItemText = "Tab Name 1",
  horizontalTabsItemText1 = "Tab Name 2",
  visible = true,
  visible1 = true,
  visible2 = true,
}) => {
  return (
    <div className={`horizontal-tabs ${className}`}>
      <HorizontalTabsItem className="horizontal-tabs-item-instance" selected text={horizontalTabsItemText} />
      <HorizontalTabsItem className="design-component-instance-node" selected={false} text={horizontalTabsItemText1} />
      {visible && <HorizontalTabsItem className="design-component-instance-node" selected={false} text="Tab Name 3" />}

      {visible1 && <HorizontalTabsItem className="design-component-instance-node" selected={false} text="Tab Name 4" />}

      {visible2 && <HorizontalTabsItem className="design-component-instance-node" selected={false} text="Tab Name 5" />}
    </div>
  );
};

HorizontalTabs.propTypes = {
  horizontalTabsItemText: PropTypes.string,
  horizontalTabsItemText1: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
};
