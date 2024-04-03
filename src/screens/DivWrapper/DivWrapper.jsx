import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Dropdown } from "../../components/Dropdown";
import { FilterPanel } from "../../components/FilterPanel";
import { Header } from "../../components/Header";
import { HorizontalTabs } from "../../components/HorizontalTabs";
import { MapZoomCoordinates } from "../../components/MapZoomCoordinates";
import { SearchBar } from "../../components/SearchBar";
import { SubNav } from "../../components/SubNav";
import { Toolbar } from "../../components/Toolbar";
import { WidgetGroup } from "../../components/WidgetGroup";
import { DeviceConnectivity } from "../../icons/DeviceConnectivity";
import { Globe4 } from "../../icons/Globe4";
import { LayersThree1 } from "../../icons/LayersThree1";
import { MarkerPin63 } from "../../icons/MarkerPin63";
import { Sun } from "../../icons/Sun";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="application-screen-3">
        <div className="overlap-4">
          <div className="regional-map-3" />
          <div className="frame-16">
            <div className="frame-17">
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="basemap-control-bar-2">
                      <div className="controls-4">
                        <SearchBar
                          chevronDownColor="#667085"
                          className="search-bar-3"
                          search5Color="#667085"
                          searchButton
                          type="filled"
                        />
                        <HorizontalTabs
                          className="horizontal-tabs-3"
                          horizontalTabsItemText="Wireless"
                          horizontalTabsItemText1="Wireline"
                          visible={false}
                          visible1={false}
                          visible2={false}
                        />
                        <Dropdown chevronDown7Color="#667085" className="dropdown-3" open={false} text="All Regions" />
                      </div>
                    </div>
                    <div className="frame-21">
                      <div className="title-3">
                        <Breadcrumbs
                          chevronRight25Color="#667085"
                          chevronRight25Color1="#667085"
                          chevronRight25Color2="#667085"
                          chevronRight25Color3="#667085"
                          chevronRight25Stroke="#667085"
                          className="breadcrumbs-3"
                          hasDiv={false}
                          hasText={false}
                          homeLine1Color="#667085"
                          text="Wireless Network"
                          text1="Tampa, FL"
                          text2="Core Connection"
                          type="default"
                          visible={false}
                          visible1={false}
                        />
                        <div className="text-wrapper-15">Wireless Network</div>
                      </div>
                      <div className="map-legend-2">
                        <div className="sites-3">
                          <div className="site-types-6">SITE TYPES</div>
                          <div className="macro-5">
                            <div className="site-types-7">
                              <div className="macro-6" />
                            </div>
                            <div className="text-wrapper-16">Macro</div>
                          </div>
                          <div className="macro-5">
                            <div className="site-types-7">
                              <div className="small-cell-3" />
                            </div>
                            <div className="text-wrapper-16">Small Cell</div>
                          </div>
                          <div className="macro-5">
                            <div className="site-types-7">
                              <img className="med-cell-3" alt="Med cell" src="/img/med-cell.svg" />
                            </div>
                            <div className="text-wrapper-16">Med Cell</div>
                          </div>
                          <div className="macro-5">
                            <div className="site-types-7">
                              <img className="union-3" alt="Union" src="/img/union-9.svg" />
                            </div>
                            <div className="text-wrapper-16">In Building</div>
                          </div>
                          <div className="macro-5">
                            <div className="site-types-8">
                              <div className="ellipse-7" />
                            </div>
                            <div className="text-wrapper-16">Hub</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-22">
                    <WidgetGroup
                      columnWidgetBarChart="/img/bar-chart.svg"
                      smallWidgetDonutPieChartOverlapGroupClassName="widget-group-2"
                      type="default"
                    />
                    <MapZoomCoordinates className="map-zoom-coordinates-3" minusColor="#667085" plusColor="#667085" />
                  </div>
                </div>
              </div>
            </div>
            <div className="layers-filters-pane-3">
              <FilterPanel
                accordionChevronUp4Color="#101828"
                accordionChevronUp4Stroke="#101828"
                accordionLabel="Site Types"
                accordionLabel1="Quality"
                accordionLabel2="Filter Capacity"
                className="design-component-instance-node-4"
                text="FILTER SITES"
                toggleListHasDiv={false}
                toggleListHasOption={false}
                toggleListHasOption1={false}
                toggleListHasOption2={false}
                toggleListHasOption3={false}
                toggleListHasOption4={false}
                toggleListHasOption5={false}
                toggleListHasOption6={false}
                toggleListHasOption7={false}
                toggleListText="Hub"
                toggleListText1="Show Utilization"
                toggleListToggleActive={false}
                toggleListVisible={false}
                visible={false}
                visible1={false}
              />
              <SubNav
                className="design-component-instance-node-4"
                subNavItemsChevronLeft4Color="#101828"
                subNavItemsChevronLeft4Color1="#667085"
                subNavItemsChevronLeft4Color2="#667085"
                subNavItemsChevronLeft4Stroke="#667085"
                subNavItemsLabel="Sites"
                subNavItemsLabel1="Region"
                subNavItemsLabel2="Network"
                subNavItemsLabel3="Market"
                text="LAYERS"
                visible={false}
                visible1={false}
                visible2={false}
                visible3={false}
                visible4={false}
                visible5={false}
              />
              <Toolbar
                active
                arrowRightColor="#101828"
                className="toolbar-3"
                override={<DeviceConnectivity className="icon-instance-node-6" color="#101828" />}
                toolbarIconIcon={<LayersThree1 className="icon-instance-node-6" color="white" />}
                toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-6" color="#101828" />}
                toolbarIconIcon2={<Globe4 className="icon-instance-node-6" color="#101828" />}
                toolbarIconIcon3={<Sun className="icon-instance-node-6" color="#101828" />}
              />
            </div>
          </div>
        </div>
        <Header className="header-4" menu2Color="#667085" userColor="#667085" />
      </div>
    </div>
  );
};
