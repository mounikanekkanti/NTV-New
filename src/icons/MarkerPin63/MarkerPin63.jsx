/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const MarkerPin63 = ({ color = "white", className }) => {
  return (
    <svg
      className={`marker-pin-63 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.1056 13.8418C13.7624 13.8418 15.1056 12.4987 15.1056 10.8418C15.1056 9.18494 13.7624 7.8418 12.1056 7.8418C10.4487 7.8418 9.10558 9.18494 9.10558 10.8418C9.10558 12.4987 10.4487 13.8418 12.1056 13.8418Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M12.1056 22.8418C16.1056 18.8418 20.1056 15.2601 20.1056 10.8418C20.1056 6.42352 16.5239 2.8418 12.1056 2.8418C7.6873 2.8418 4.10558 6.42352 4.10558 10.8418C4.10558 15.2601 8.10558 18.8418 12.1056 22.8418Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

MarkerPin63.propTypes = {
  color: PropTypes.string,
};
