/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ColumnWidget = ({ size, className, barChart = "/img/bar-chart-2.svg", contentClassName }) => {
  return (
    <div className={`column-widget ${className}`}>
      <div className="header-2">
        <div className={`connectivity-status ${size}`}>
          {size === "compact" && <>Connectivity Status</>}

          {size === "tall" && <>Column Chart Widget</>}
        </div>
        <div className="ethernet-backhaul">
          {size === "compact" && <>Ethernet Backhaul</>}

          {size === "tall" && <>Chart Summary</>}
        </div>
      </div>
      <img
        className={`bar-chart size-${size}`}
        alt="Bar chart"
        src={size === "tall" ? "/img/bar-chart-3.svg" : barChart}
      />
      <div className={`content size-0-${size} ${contentClassName}`}>
        <div className="element">
          <div className="ellipse" />
          <div className="div-2">
            {size === "tall" && <>Column 1</>}

            {size === "compact" && <>Connected</>}
          </div>
          <div className="div-3">
            {size === "tall" && <>1,000</>}

            {size === "compact" && <>76,410</>}
          </div>
        </div>
        <div className="element">
          <div className="ellipse-2" />
          <div className="div-2">
            {size === "compact" && <>Failure</>}

            {size === "tall" && <>Column 2</>}
          </div>
          <div className="div-3">
            {size === "compact" && <>15,916</>}

            {size === "tall" && <>900</>}
          </div>
        </div>
        <div className="element">
          <div className="ellipse-3" />
          <div className="div-2">
            {size === "compact" && <>Not Attempted</>}

            {size === "tall" && <>Column 3</>}
          </div>
          <div className="div-3">
            {size === "compact" && <>3,821</>}

            {size === "tall" && <>800</>}
          </div>
        </div>
        {size === "tall" && (
          <>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 4</div>
              <div className="div-3">700</div>
            </div>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 5</div>
              <div className="div-3">600</div>
            </div>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 6</div>
              <div className="div-3">500</div>
            </div>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 7</div>
              <div className="div-3">400</div>
            </div>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 8</div>
              <div className="div-3">300</div>
            </div>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 9</div>
              <div className="div-3">200</div>
            </div>
            <div className="element">
              <div className="ellipse-4" />
              <div className="div-2">Column 10</div>
              <div className="div-3">100</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ColumnWidget.propTypes = {
  size: PropTypes.oneOf(["tall", "compact"]),
  barChart: PropTypes.string,
};
