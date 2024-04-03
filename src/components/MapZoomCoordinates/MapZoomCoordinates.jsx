/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Minus } from "../../icons/Minus";
import { Plus } from "../../icons/Plus";
import "./style.css";

export const MapZoomCoordinates = ({ className, minusColor = "#98A2B3", plusColor = "#98A2B3" }) => {
  return (
    <div className={`map-zoom-coordinates ${className}`}>
      <div className="zoom">
        <Minus className="icon-instance-node" color={minusColor} />
        <Plus className="icon-instance-node" color={plusColor} />
      </div>
      <div className="longitude">
        <div className="text-wrapper-6">Lv 12</div>
      </div>
      <div className="latitude">
        <div className="text-wrapper-6">Latitude:</div>
        <div className="text-wrapper-7">37.090240</div>
      </div>
      <div className="longitude-2">
        <div className="text-wrapper-6">Longitude:</div>
        <div className="text-wrapper-7">-95.712891</div>
      </div>
    </div>
  );
};

MapZoomCoordinates.propTypes = {
  minusColor: PropTypes.string,
  plusColor: PropTypes.string,
};
