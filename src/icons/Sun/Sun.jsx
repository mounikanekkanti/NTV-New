/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Sun = ({ color = "white", className }) => {
  return (
    <svg
      className={`sun ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 1.94092V3.94092M12 19.9409V21.9409M4 11.9409H2M6.31412 6.25503L4.8999 4.84082M17.6859 6.25503L19.1001 4.84082M6.31412 17.6309L4.8999 19.0451M17.6859 17.6309L19.1001 19.0451M22 11.9409H20M17 11.9409C17 14.7023 14.7614 16.9409 12 16.9409C9.23858 16.9409 7 14.7023 7 11.9409C7 9.17949 9.23858 6.94092 12 6.94092C14.7614 6.94092 17 9.17949 17 11.9409Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Sun.propTypes = {
  color: PropTypes.string,
};
