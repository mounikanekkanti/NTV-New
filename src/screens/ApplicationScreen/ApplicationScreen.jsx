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

export const ApplicationScreen = () => {
  return (
    <div className="application-screen">
      <div className="div-4">
        <div className="overlap-2">
          <div className="regional-map" />
          <div className="frame-3">
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="frame-6">
                    <div className="basemap-control-bar">
                      <div className="controls-2">
                        <SearchBar className="search-bar-instance" searchButton type="filled" />
                        <HorizontalTabs
                          className="horizontal-tabs-instance"
                          horizontalTabsItemText="Wireless"
                          horizontalTabsItemText1="Wireline"
                          visible={false}
                          visible1={false}
                          visible2={false}
                        />
                        <Dropdown className="dropdown-instance" open={false} text="All Regions" />
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="title">
                        <Breadcrumbs
                          className="breadcrumbs-instance"
                          hasDiv={false}
                          hasText={false}
                          text="Wireless Network"
                          text1="Tampa, FL"
                          text2="Core Connection"
                          type="default"
                          visible={false}
                          visible1={false}
                        />
                        <div className="text-wrapper-11">Wireless Network</div>
                      </div>
                      <div className="map-legend">
                        <div className="sites">
                          <div className="site-types">SITE TYPES</div>
                          <div className="macro">
                            <div className="site-types-2">
                              <div className="macro-2" />
                            </div>
                            <div className="text-wrapper-12">Macro</div>
                          </div>
                          <div className="macro">
                            <div className="site-types-2">
                              <div className="small-cell" />
                            </div>
                            <div className="text-wrapper-12">Small Cell</div>
                          </div>
                          <div className="macro">
                            <div className="site-types-2">
                              <img className="med-cell" alt="Med cell" src="/img/med-cell.svg" />
                            </div>
                            <div className="text-wrapper-12">Med Cell</div>
                          </div>
                          <div className="macro">
                            <div className="site-types-2">
                              <img className="union" alt="Union" src="/img/union-11.svg" />
                            </div>
                            <div className="text-wrapper-12">In Building</div>
                          </div>
                          <div className="macro">
                            <div className="ellipse-wrapper">
                              <div className="ellipse-5" />
                            </div>
                            <div className="text-wrapper-12">Hub</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-8">
                    <WidgetGroup
                      className="widget-group-instance"
                      columnWidgetBarChart="/img/bar-chart-5.svg"
                      type="default"
                    />
                    <MapZoomCoordinates className="map-zoom-coordinates-instance" />
                  </div>
                </div>
              </div>
            </div>
            <div className="layers-filters-pane">
              <FilterPanel
                accordionLabel="Site Types"
                accordionLabel1="Quality"
                accordionLabel2="Filter Capacity"
                className="filter-panel-instance"
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
                className="sub-nav-instance"
                subNavItemsCategoryClassName="sub-nav-2"
                subNavItemsCategoryClassNameOverride="sub-nav-2"
                subNavItemsDivClassName="sub-nav-2"
                subNavItemsDivClassNameOverride="sub-nav-2"
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
                className="toolbar-instance"
                override={<DeviceConnectivity className="icon-instance-node-4" color="white" />}
                toolbarIconIcon={<LayersThree1 className="icon-instance-node-4" color="white" />}
                toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-4" color="white" />}
                toolbarIconIcon2={<Globe4 className="icon-instance-node-4" color="white" />}
                toolbarIconIcon3={<Sun className="icon-instance-node-4" color="white" />}
              />
            </div>
          </div>
        </div>
        <Header className="header-instance" />
      </div>
    </div>
  );
};
