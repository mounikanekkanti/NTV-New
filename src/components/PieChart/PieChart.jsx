/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PieChart = ({
  className,
  progressCircleClassName,
  overlapClassName,
  ringClassName,
  overlapGroupClassName,
  lineClassName,
  line = "/img/line-3.svg",
  numberClassName,
}) => {
  return (
    <div className={`pie-chart ${className}`}>
      <div className={`progress-circle ${progressCircleClassName}`}>
        <div className={`overlap ${overlapClassName}`}>
          <div className={`ring ${ringClassName}`}>
            <div className={`overlap-group ${overlapGroupClassName}`}>
              <img className={`img ${lineClassName}`} alt="Line" src={line} />
            </div>
          </div>
          <div className={`number ${numberClassName}`}>80%</div>
        </div>
      </div>
    </div>
  );
};

PieChart.propTypes = {
  line: PropTypes.string,
};
