/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronRight25 } from "../../icons/ChevronRight25";
import { HomeLine1 } from "../../icons/HomeLine1";
import "./style.css";

export const Breadcrumbs = ({
  type,
  className,
  text = "Item 2",
  text1 = "Item 3",
  text2 = "Item 4",
  visible = true,
  hasText = true,
  visible1 = true,
  hasDiv = true,
  homeLine1Color = "#98A2B3",
  chevronRight25Color = "#98A2B3",
  chevronRight25Stroke = "#98A2B3",
  chevronRight25Color1 = "#98A2B3",
  chevronRight25Color2 = "#98A2B3",
  chevronRight25Color3 = "#98A2B3",
  visible2 = true,
  hasText1 = true,
  visible3 = true,
  hasText2 = true,
  visible4 = true,
  hasText3 = true,
  visible5 = true,
  hasText4 = true,
  chevronRight25Color4 = "#98A2B3",
  chevronRight25Color5 = "#98A2B3",
}) => {
  return (
    <div className={`breadcrumbs ${className}`}>
      <HomeLine1 className="home-line" color={homeLine1Color} />
      <ChevronRight25 className="chevron-right" color={chevronRight25Color} />
      <div className="text-3">
        {["default", "truncated-long"].includes(type) && <>Item 1</>}

        {type === "truncated-small" && <>...</>}
      </div>
      {visible2 && (
        <>
          <>
            {["default", "truncated-long"].includes(type) && (
              <ChevronRight25 className="chevron-right" color={chevronRight25Stroke} />
            )}
          </>
        </>
      )}

      {hasText1 && (
        <>
          <>{type === "default" && <div className="text-3">{text}</div>}</>
        </>
      )}

      {type === "truncated-long" && <div className="text-3">...</div>}

      {visible3 && (
        <>
          <>{type === "default" && <ChevronRight25 className="chevron-right" color={chevronRight25Color1} />}</>
        </>
      )}

      {hasText2 && (
        <>
          <>{type === "default" && <div className="text-3">{text1}</div>}</>
        </>
      )}

      {visible4 && (
        <>
          <>{type === "default" && <ChevronRight25 className="chevron-right" color={chevronRight25Color2} />}</>
        </>
      )}

      {hasText3 && (
        <>
          <>{type === "default" && <div className="text-3">{text2}</div>}</>
        </>
      )}

      {visible && (
        <>
          <>{type === "default" && <ChevronRight25 className="chevron-right" color={chevronRight25Color4} />}</>
        </>
      )}

      {hasText && (
        <>
          <>{type === "default" && <div className="text-3">{text2}</div>}</>
        </>
      )}

      {visible1 && (
        <>
          <>{type === "default" && <ChevronRight25 className="chevron-right" color={chevronRight25Color5} />}</>
        </>
      )}

      {hasDiv && (
        <>
          <>{type === "default" && <div className="text-3">{text2}</div>}</>
        </>
      )}

      {visible5 && <ChevronRight25 className="chevron-right" color={chevronRight25Color3} />}

      {hasText4 && <div className="text-3">{text2}</div>}
    </div>
  );
};

Breadcrumbs.propTypes = {
  type: PropTypes.oneOf(["truncated-long", "truncated-small", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  visible: PropTypes.bool,
  hasText: PropTypes.bool,
  visible1: PropTypes.bool,
  hasDiv: PropTypes.bool,
  homeLine1Color: PropTypes.string,
  chevronRight25Color: PropTypes.string,
  chevronRight25Stroke: PropTypes.string,
  chevronRight25Color1: PropTypes.string,
  chevronRight25Color2: PropTypes.string,
  chevronRight25Color3: PropTypes.string,
  visible2: PropTypes.bool,
  hasText1: PropTypes.bool,
  visible3: PropTypes.bool,
  hasText2: PropTypes.bool,
  visible4: PropTypes.bool,
  hasText3: PropTypes.bool,
  visible5: PropTypes.bool,
  hasText4: PropTypes.bool,
  chevronRight25Color4: PropTypes.string,
  chevronRight25Color5: PropTypes.string,
};
