/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DqiRating } from "../DqiRating";
import { PieChart } from "../PieChart";
import "./style.css";

export const SmallWidgetDonut = ({
  type,
  className,
  text = "Data Quality",
  DQIRatingRating = "best",
  text1 = "Title",
  text2 = "Subtext",
  pieChartOverlapGroupClassName,
}) => {
  return (
    <div className={`small-widget-donut ${type} ${className}`}>
      {["donut", "line"].includes(type) && (
        <>
          <div className="title-summary">
            <div className="text-wrapper-4">{text1}</div>
            <div className="subtext">{text2}</div>
          </div>
          <PieChart
            className="pie-chart-3"
            line="/img/line.svg"
            lineClassName="pie-chart-4"
            numberClassName="pie-chart-5"
            overlapClassName="pie-chart-instance"
            overlapGroupClassName={pieChartOverlapGroupClassName}
            progressCircleClassName="pie-chart-2"
            ringClassName="pie-chart-instance"
          />
        </>
      )}

      {type === "DQI" && (
        <>
          <div className="title-summary-2">
            <div className="text-wrapper-4">{text}</div>
            <div className="text-wrapper-5">Network</div>
          </div>
          <DqiRating className="DQI-rating-instance" rating={DQIRatingRating} />
        </>
      )}
    </div>
  );
};

SmallWidgetDonut.propTypes = {
  type: PropTypes.oneOf(["DQI", "line", "donut"]),
  text: PropTypes.string,
  DQIRatingRating: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
