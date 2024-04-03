/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Accordion } from "../Accordion";
import { ToggleList } from "../ToggleList";
import { UtilizationTag } from "../UtilizationTag";
import "./style.css";

export const FilterPanel = ({
  className,
  text = "TYPE",
  accordionLabel = "Label",
  toggleListHasOption,
  toggleListText = "Placeholder",
  toggleListHasDiv,
  toggleListVisible,
  visible = true,
  visible1 = true,
  accordionLabel1 = "Label",
  toggleListHasOption1,
  toggleListToggleActive = true,
  toggleListHasOption2,
  toggleListHasOption3,
  toggleListText1 = "Placeholder",
  toggleListHasOption4,
  toggleListHasOption5,
  toggleListHasOption6,
  toggleListHasOption7,
  accordionLabel2 = "Label",
  accordionChevronUp4Color = "white",
  accordionChevronUp4Stroke = "white",
  onClick,
}) => {
  return (
    <div className={`filter-panel ${className}`} onClick={onClick}>
      <div className="type-wrapper">
        <div className="type">{text}</div>
      </div>
      <Accordion
        chevronUp4Color={accordionChevronUp4Color}
        className="accordion-instance"
        label={accordionLabel}
        state="open"
        theme="dark"
      />
      <ToggleList
        className="toggle-list-instance"
        hasDiv={toggleListHasOption}
        hasOption={toggleListVisible}
        text={toggleListText}
        toggleActive
        visible={toggleListHasDiv}
      />
      {visible && (
        <Accordion chevronUp4Color="white" className="accordion-instance" label="Label" state="open" theme="dark" />
      )}

      {visible1 && <ToggleList className="toggle-list-instance" text="Placeholder" toggleActive />}

      <Accordion
        chevronUp4Color={accordionChevronUp4Stroke}
        className="accordion-instance"
        label={accordionLabel1}
        state="open"
        theme="dark"
      />
      <ToggleList
        className="toggle-list-instance"
        hasDiv={toggleListHasOption3}
        hasOption={toggleListHasOption7}
        hasOption1={toggleListHasOption5}
        hasOption2={toggleListHasOption6}
        hasOption3={toggleListHasOption2}
        hasOption4={toggleListHasOption1}
        text={toggleListText1}
        toggleActive={toggleListToggleActive}
        visible={toggleListHasOption4}
      />
      <Accordion className="accordion-instance" label={accordionLabel2} state="open" theme="dark" />
      <div className="utilization">
        <div className="utilization-2">
          <UtilizationTag active color="blue-1" />
          <UtilizationTag active color="blue-2" />
        </div>
        <div className="utilization-2">
          <UtilizationTag active color="success-1" />
          <UtilizationTag active color="success-2" />
        </div>
        <div className="utilization-2">
          <UtilizationTag active color="warning-1" />
          <UtilizationTag active color="warning-2" />
        </div>
        <div className="utilization-2">
          <UtilizationTag active color="warning-3" />
          <UtilizationTag active color="warning-4" />
        </div>
        <div className="utilization-2">
          <UtilizationTag active color="error-1" />
          <UtilizationTag active color="error-2" />
        </div>
        <div className="utilization-2">
          <UtilizationTag active color="critical" />
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  text: PropTypes.string,
  accordionLabel: PropTypes.string,
  toggleListHasOption: PropTypes.bool,
  toggleListText: PropTypes.string,
  toggleListHasDiv: PropTypes.bool,
  toggleListVisible: PropTypes.bool,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  accordionLabel1: PropTypes.string,
  toggleListHasOption1: PropTypes.bool,
  toggleListToggleActive: PropTypes.bool,
  toggleListHasOption2: PropTypes.bool,
  toggleListHasOption3: PropTypes.bool,
  toggleListText1: PropTypes.string,
  toggleListHasOption4: PropTypes.bool,
  toggleListHasOption5: PropTypes.bool,
  toggleListHasOption6: PropTypes.bool,
  toggleListHasOption7: PropTypes.bool,
  accordionLabel2: PropTypes.string,
  accordionChevronUp4Color: PropTypes.string,
  accordionChevronUp4Stroke: PropTypes.string,
};
