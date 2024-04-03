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

export const DfDashboardScreen = () => {
  return (
    <div className="df-dashboard-screen">
      <div className="df-dashboard-2">
        <div className="frame-49">
          <div className="frame-50">
            <div className="basemap-control-bar-6">
              <div className="global-filters-5">
                <div className="controls-9">
                  <SearchBar
                    className="search-bar-8"
                    searchButton
                    text="Keyword, ID, Site, Address"
                    type="default"
                  />
                  <HorizontalTabs
                    className="horizontal-tabs-8"
                    horizontalTabsItemText="Wireless"
                    horizontalTabsItemText1="Wireline"
                    visible={false}
                    visible1={false}
                    visible2={false}
                  />
                  <Dropdown
                    chevronDown7Color="#98A2B3"
                    className="dropdown-8"
                    open={false}
                    text="West&nbsp;&nbsp;Region"
                  />
                </div>
                <div className="fullscreen-toggle-2">
                  <Expand05 className="icon-instance-node-11" />
                </div>
              </div>
            </div>
            <div className="frame-51">
              <div className="regional-map-5">
                <MapZoomCoordinates className="map-zoom-coordinates-8" minusColor="#98A2B3" plusColor="#98A2B3" />
                <div className="map-legend-4">
                  <div className="sites-5">
                    <div className="site-types-12">SITE TYPES</div>
                    <div className="macro-9">
                      <div className="site-types-13">
                        <div className="macro-10" />
                      </div>
                      <div className="text-wrapper-60">Macro</div>
                    </div>
                    <div className="macro-9">
                      <div className="site-types-13">
                        <div className="small-cell-5" />
                      </div>
                      <div className="text-wrapper-60">Small Cell</div>
                    </div>
                    <div className="macro-9">
                      <div className="site-types-13">
                        <img className="med-cell-5" alt="Med cell" src="/img/med-cell.svg" />
                      </div>
                      <div className="text-wrapper-60">Med Cell</div>
                    </div>
                    <div className="macro-9">
                      <div className="site-types-13">
                        <img className="union-5" alt="Union" src="/img/union.svg" />
                      </div>
                      <div className="text-wrapper-60">In Building</div>
                    </div>
                    <div className="macro-9">
                      <div className="site-types-14">
                        <div className="ellipse-24" />
                      </div>
                      <div className="text-wrapper-60">Hub</div>
                    </div>
                  </div>
                </div>
                <div className="tooltip-3">
                  <div className="content-3">
                    <div className="icon-and-title-2">
                      <div className="text-18">Los Angeles Intl. Airport</div>
                    </div>
                    <p className="p">1 World Way, Los Angeles, CA 90045</p>
                  </div>
                  <img className="tooltip-4" alt="Tooltip" src="/img/tooltip.svg" />
                </div>
                <Breadcrumbs
                  chevronRight25Color="#98A2B3"
                  chevronRight25Color1="#98A2B3"
                  chevronRight25Color2="#98A2B3"
                  chevronRight25Color4="#98A2B3"
                  chevronRight25Color5="#98A2B3"
                  chevronRight25Stroke="#98A2B3"
                  className="breadcrumbs-8"
                  hasDiv={false}
                  hasText4={false}
                  homeLine1Color="#98A2B3"
                  text="West Region"
                  text1="Market"
                  text2="Los Angeles Intl.Airport"
                  type="default"
                  visible5={false}
                />
                <div className="widget-group-4">
                  <Table
                    className="design-component-instance-node-6"
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
                    className="design-component-instance-node-6"
                    pieChartOverlapGroupClassName="small-widget-donut-2"
                    text1="Utilization Summary"
                    text2="Overall Summary"
                    type="donut"
                  />
                  <SmallWidgetDonut
                    DQIRatingRating="good"
                    className="design-component-instance-node-6"
                    text="Data Quality Index"
                    type="DQI"
                  />
                </div>
              </div>
            </div>
          </div>
          <Toolbar
            active={false}
            arrowLeftColor="white"
            className="toolbar-8"
            override={<DeviceConnectivity className="icon-instance-node-11" color="white" />}
            toolbarIconIcon={<LayersThree1 className="icon-instance-node-11" color="white" />}
            toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-11" color="white" />}
            toolbarIconIcon2={<Globe4 className="icon-instance-node-11" color="white" />}
            toolbarIconIcon3={<Sun className="icon-instance-node-11" color="white" />}
          />
        </div>
        <Header className="header-9" menu2Color="#98A2B3" userColor="#98A2B3" />
      </div>
    </div>
  );
};
