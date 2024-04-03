/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SubNavItems } from "../SubNavItems";
import "./style.css";

export const SubNav = ({
  className,
  text = "TYPE",
  subNavItemsCategoryClassName,
  subNavItemsLabel = "Label",
  subNavItemsCategoryClassNameOverride,
  subNavItemsLabel1 = "Label",
  subNavItemsDivClassName,
  subNavItemsLabel2 = "Label",
  subNavItemsDivClassNameOverride,
  subNavItemsLabel3 = "Label",
  visible = true,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
  visible5 = true,
  onClick,
  subNavItemsChevronLeft4Color = "white",
  subNavItemsChevronLeft4Stroke = "#98A2B3",
  subNavItemsChevronLeft4Color1 = "#98A2B3",
  subNavItemsChevronLeft4Color2 = "#98A2B3",
}) => {
  return (
    <div className={`sub-nav ${className}`}>
      <div className="frame-2">
        <div className="type-2">{text}</div>
      </div>
      <SubNavItems
        categoryClassName={subNavItemsCategoryClassName}
        chevronLeft4Color={subNavItemsChevronLeft4Color}
        className="sub-nav-items-instance"
        label={subNavItemsLabel}
        state="active"
        onClick={onClick}
      />
      <SubNavItems
        categoryClassName={subNavItemsCategoryClassNameOverride}
        chevronLeft4Color={subNavItemsChevronLeft4Stroke}
        className="sub-nav-items-instance"
        label={subNavItemsLabel1}
        state="inactive"
      />
      <SubNavItems
        categoryClassName={subNavItemsDivClassName}
        chevronLeft4Color={subNavItemsChevronLeft4Color1}
        className="sub-nav-items-instance"
        label={subNavItemsLabel2}
        state="inactive"
      />
      <SubNavItems
        categoryClassName={subNavItemsDivClassNameOverride}
        chevronLeft4Color={subNavItemsChevronLeft4Color2}
        className="sub-nav-items-instance"
        label={subNavItemsLabel3}
        state="inactive"
      />
      {visible && (
        <SubNavItems chevronLeft4Color="#98A2B3" className="sub-nav-items-instance" label="Label" state="inactive" />
      )}

      {visible1 && (
        <SubNavItems chevronLeft4Color="#98A2B3" className="sub-nav-items-instance" label="Label" state="inactive" />
      )}

      {visible2 && (
        <SubNavItems chevronLeft4Color="#98A2B3" className="sub-nav-items-instance" label="Label" state="inactive" />
      )}

      {visible3 && (
        <SubNavItems chevronLeft4Color="#98A2B3" className="sub-nav-items-instance" label="Label" state="inactive" />
      )}

      {visible4 && (
        <SubNavItems chevronLeft4Color="#98A2B3" className="sub-nav-items-instance" label="Label" state="inactive" />
      )}

      {visible5 && (
        <SubNavItems chevronLeft4Color="#98A2B3" className="sub-nav-items-instance" label="Label" state="inactive" />
      )}
    </div>
  );
};

SubNav.propTypes = {
  text: PropTypes.string,
  subNavItemsLabel: PropTypes.string,
  subNavItemsLabel1: PropTypes.string,
  subNavItemsLabel2: PropTypes.string,
  subNavItemsLabel3: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
  visible5: PropTypes.bool,
  subNavItemsChevronLeft4Color: PropTypes.string,
  subNavItemsChevronLeft4Stroke: PropTypes.string,
  subNavItemsChevronLeft4Color1: PropTypes.string,
  subNavItemsChevronLeft4Color2: PropTypes.string,
};
