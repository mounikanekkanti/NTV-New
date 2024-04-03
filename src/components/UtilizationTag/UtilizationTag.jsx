/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UtilizationTag = ({ color, active }) => {
  return (
    <div
      className={`utilization-tag color-${color} active-0-${active}`}
      data-alias-mode={color === "default" ? "light" : undefined}
    >
      <div className="element-2">
        {["blue-1", "default"].includes(color) && <>0-10</>}

        {color === "blue-2" && <>10-20</>}

        {color === "success-1" && <>20-30</>}

        {color === "success-2" && <>30-40</>}

        {color === "warning-1" && <>40-50</>}

        {color === "warning-2" && <>50-60</>}

        {color === "warning-3" && <>60-70</>}

        {color === "warning-4" && <>70-80</>}

        {color === "error-1" && <>80-90</>}

        {color === "error-2" && <>90-100</>}

        {color === "critical" && <>100</>}
      </div>
    </div>
  );
};

UtilizationTag.propTypes = {
  color: PropTypes.oneOf([
    "warning-2",
    "critical",
    "warning-3",
    "success-2",
    "blue-2",
    "default",
    "warning-1",
    "error-2",
    "warning-4",
    "success-1",
    "error-1",
    "blue-1",
  ]),
  active: PropTypes.bool,
};
