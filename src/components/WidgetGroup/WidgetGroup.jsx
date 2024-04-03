/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ColumnWidget } from "../ColumnWidget";
import { SmallWidgetDonut } from "../SmallWidgetDonut";
import { Table } from "../Table";
import "./style.css";

export const WidgetGroup = ({
  type,
  className,
  columnWidgetBarChart = "/img/bar-chart-1.svg",
  smallWidgetDonutPieChartOverlapGroupClassName,
}) => {
  return (
    <div className={`widget-group ${className}`}>
      {/* <ColumnWidget
        barChart={columnWidgetBarChart}
        className="column-widget-instance"
        contentClassName="column-widget-2"
        size="compact"
      /> */}
      <SmallWidgetDonut
        DQIRatingRating="good"
        className="design-component-instance-node-2"
        text="Data Quality Index"
        type="DQI"
      />
      {/* <SmallWidgetDonut
        className="design-component-instance-node-2"
        pieChartOverlapGroupClassName={smallWidgetDonutPieChartOverlapGroupClassName}
        text1="Reconciled"
        text2="Overall Summary"
        type="donut"
      /> */}
      <Table
        className="design-component-instance-node-2"
        nameClassName="table-instance"
        property1="classic-table"
        text="4,463 Total Sites"
        text1="Number of sites by type"
        text2="Macro"
        text3="1,000"
        text4="Small Cell"
        text5="Medium Cell"
        text6="In Building"
        text7="Hub"
        text9="25%"
      />
    </div>
  );
};

WidgetGroup.propTypes = {
  type: PropTypes.oneOf(["default"]),
  columnWidgetBarChart: PropTypes.string,
};
