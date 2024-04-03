/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DqiRating = ({ rating, className }) => {
  return (
    <div className={`DQI-rating ${className}`}>
      <div className={`column-chart ${rating}`}>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
      </div>
      <div className="y-axis">
        <div className="text-wrapper-2">Best</div>
        <div className="text-wrapper-3">Good</div>
        <div className="text-wrapper-3">Fair</div>
        <div className="text-wrapper-3">Poor</div>
      </div>
    </div>
  );
};

DqiRating.propTypes = {
  rating: PropTypes.oneOf(["poor", "best", "fair", "good"]),
};
