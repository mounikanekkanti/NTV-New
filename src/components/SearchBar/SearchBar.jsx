/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { Search5 } from "../../icons/Search5";
import "./style.css";

export const SearchBar = ({
  showChevronDown = true,
  type,
  searchButton,
  className,
  search5Color = "var(--alias-search-icon-color)",
  chevronDownColor = "var(--alias-search-icon-color)",
  text = "Search here",
}) => {
  return (
    <div className={`search-bar ${className}`}>
      <div className={`div search-button-${searchButton}`}>
        <Search5 className="instance-node" color={searchButton ? search5Color : "#98A2B3"} />
        <div className={`tampa-FL ${type}`}>
          {type === "filled" && <>Tampa, FL</>}

          {type === "default" && <>{text}</>}
        </div>
      </div>
      {searchButton && (
        <div className="selector">
          <div className="text-wrapper">Search all</div>
          {showChevronDown && <ChevronDown className="instance-node" color={chevronDownColor} />}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  showChevronDown: PropTypes.bool,
  type: PropTypes.oneOf(["filled", "default"]),
  searchButton: PropTypes.bool,
  search5Color: PropTypes.string,
  chevronDownColor: PropTypes.string,
  text: PropTypes.string,
};
