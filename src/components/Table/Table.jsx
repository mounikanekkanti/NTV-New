/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Table = ({
  property1,
  className,
  nameClassName,
  text = "Table",
  text1 = "Subtext",
  text2 = "Row 1",
  text3 = "100,000",
  text4 = "Row 2",
  text5 = "Row 3",
  text6 = "Row 4",
  text7 = "Row 5",
  text8 = "DATA TYPE",
  text9 = "25%",
  inputType = "text",
}) => {
  return (
    <div className={`table ${className}`}>
      <div className="frame">
        {property1 === "classic-table" && <div className={`name ${nameClassName}`}>{text}</div>}

        {property1 === "dashboard" && (
          <>
            <div className="name-2">{text8}</div>
            <div className="name-3">{text}</div>
          </>
        )}

        <input className="input" placeholder={text1} type={inputType} />
      </div>
      <div className="row">
        <div className="number-2">
          <div className="name-4">
            <div className="name-5">{text2}</div>
          </div>
          <div className="amount">{text3}</div>
        </div>
        <div className="percent">{text9}</div>
      </div>
      <div className="row">
        <div className="number-2">
          <div className="name-4">
            <div className="name-5">{text4}</div>
          </div>
          <div className="amount">{text3}</div>
        </div>
        <div className="percent">{text9}</div>
      </div>
      <div className="row">
        <div className="number-2">
          <div className="name-4">
            <div className="name-5">{text5}</div>
          </div>
          <div className="amount">{text3}</div>
        </div>
        <div className="percent">{text9}</div>
      </div>
      <div className="row">
        <div className="number-2">
          <div className="name-4">
            <div className="name-5">{text6}</div>
          </div>
          <div className="amount">{text3}</div>
        </div>
        <div className="percent">{text9}</div>
      </div>
      <div className="row">
        <div className="number-2">
          <div className="name-4">
            <div className="name-5">{text7}</div>
          </div>
          <div className="amount">{text3}</div>
        </div>
        <div className="percent">{text9}</div>
      </div>
    </div>
  );
};

Table.propTypes = {
  property1: PropTypes.oneOf(["dashboard", "classic-table"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  inputType: PropTypes.string,
};
