import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Dropdown } from "../../components/Dropdown";
import { Header } from "../../components/Header";
import { HorizontalTabs } from "../../components/HorizontalTabs";
import { MapZoomCoordinates } from "../../components/MapZoomCoordinates";
import { SearchBar } from "../../components/SearchBar";
import { SmallWidgetDonut } from "../../components/SmallWidgetDonut";
import { Table } from "../../components/Table";
import { Toolbar } from "../../components/Toolbar";
import { DeviceConnectivity } from "../../icons/DeviceConnectivity";
import { Expand05 } from "../../icons/Expand05";
import { Globe4 } from "../../icons/Globe4";
import { LayersThree1 } from "../../icons/LayersThree1";
import { MarkerPin63 } from "../../icons/MarkerPin63";
import { Sun } from "../../icons/Sun";
import "./style.css";

export const DfDashboard = () => {
  return (
    <div className="df-dashboard">
      <div className="div-17" data-alias-mode="light">
        <div className="frame-47">
          <div className="frame-48">
            <div className="basemap-control-bar-5">
              <div className="global-filters-4">
                <div className="controls-8">
                  <SearchBar
                    chevronDownColor="#667085"
                    className="search-bar-7"
                    search5Color="#667085"
                    searchButton
                    text="Keyword, ID, Site, Address"
                    type="default"
                  />
                  <HorizontalTabs
                    className="horizontal-tabs-7"
                    horizontalTabsItemText="Wireless"
                    horizontalTabsItemText1="Wireline"
                    visible={false}
                    visible1={false}
                    visible2={false}
                  />
                  <Dropdown
                    chevronDown7Color="#667085"
                    className="dropdown-7"
                    open={false}
                    text="West&nbsp;&nbsp;Region"
                  />
                </div>
                <div className="expand-05-instance-wrapper">
                  <Expand05 className="icon-instance-node-10" />
                </div>
              </div>
            </div>
            <div className="regional-map-wrapper">
              <div className="regional-map-4">
                <MapZoomCoordinates className="map-zoom-coordinates-7" minusColor="#667085" plusColor="#667085" />
                <div className="map-legend-3">
                  <div className="sites-4">
                    <div className="site-types-9">SITE TYPES</div>
                    <div className="macro-7">
                      <div className="site-types-10">
                        <div className="macro-8" />
                      </div>
                      <div className="text-wrapper-59">Macro</div>
                    </div>
                    <div className="macro-7">
                      <div className="site-types-10">
                        <div className="small-cell-4" />
                      </div>
                      <div className="text-wrapper-59">Small Cell</div>
                    </div>
                    <div className="macro-7">
                      <div className="site-types-10">
                        <img className="med-cell-4" alt="Med cell" src="/img/med-cell.svg" />
                      </div>
                      <div className="text-wrapper-59">Med Cell</div>
                    </div>
                    <div className="macro-7">
                      <div className="site-types-10">
                        <img className="union-4" alt="Union" src="/img/union-1.svg" />
                      </div>
                      <div className="text-wrapper-59">In Building</div>
                    </div>
                    <div className="macro-7">
                      <div className="site-types-11">
                        <div className="ellipse-23" />
                      </div>
                      <div className="text-wrapper-59">Hub</div>
                    </div>
                  </div>
                </div>
                <div className="tooltip">
                  <div className="content-2">
                    <div className="icon-and-title">
                      <div className="text-17">Los Angeles Intl. Airport</div>
                    </div>
                    <p className="supporting-text">1 World Way, Los Angeles, CA 90045</p>
                  </div>
                  <img className="tooltip-2" alt="Tooltip" src="/img/tooltip-7.svg" />
                </div>
                <Breadcrumbs
                  chevronRight25Color="#667085"
                  chevronRight25Color1="#667085"
                  chevronRight25Color2="#667085"
                  chevronRight25Color4="#667085"
                  chevronRight25Color5="#667085"
                  chevronRight25Stroke="#667085"
                  className="breadcrumbs-7"
                  hasDiv={false}
                  hasText4={false}
                  homeLine1Color="#667085"
                  text="West Region"
                  text1="Market"
                  text2="Los Angeles Intl.Airport"
                  type="default"
                  visible5={false}
                />
                <div className="widget-group-3">
                  <Table
                    className="design-component-instance-node-5"
                    property1="dashboard"
                    text="Number of sites by type"
                    text1="28,063 total sites"
                    text2="Macro"
                    text3="1,000"
                    text4="Small Cell"
                    text5="Medium Cell"
                    text6="In Building"
                    text7="Hub"
                    text8="WEST REGION"
                    text9="3%"
                  />
                  <SmallWidgetDonut
                    className="design-component-instance-node-5"
                    pieChartOverlapGroupClassName="small-widget-donut-instance"
                    text1="Utilization Summary"
                    text2="Overall Summary"
                    type="donut"
                  />
                  <SmallWidgetDonut
                    DQIRatingRating="good"
                    className="design-component-instance-node-5"
                    text="Data Quality Index"
                    type="DQI"
                  />
                </div>
              </div>
            </div>
          </div>
          <Toolbar
            active={false}
            arrowLeftColor="#101828"
            className="toolbar-7"
            override={<DeviceConnectivity className="icon-instance-node-10" color="#101828" />}
            toolbarIconIcon={<LayersThree1 className="icon-instance-node-10" color="white" />}
            toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-10" color="#101828" />}
            toolbarIconIcon2={<Globe4 className="icon-instance-node-10" color="#101828" />}
            toolbarIconIcon3={<Sun className="icon-instance-node-10" color="#101828" />}
          />
        </div>
        <Header className="header-8" menu2Color="#667085" userColor="#667085" />
      </div>
    </div>
  );
};
