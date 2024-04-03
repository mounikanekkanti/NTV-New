import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Dropdown } from "../../components/Dropdown";
import { Header } from "../../components/Header";
import { HorizontalTabs } from "../../components/HorizontalTabs";
import { MapZoomCoordinates } from "../../components/MapZoomCoordinates";
import { MarkerPin } from "../../components/MarkerPin";
import { SearchBar } from "../../components/SearchBar";
import { Toolbar } from "../../components/Toolbar";
import { ArrowDown24 } from "../../icons/ArrowDown24";
import { DeviceConnectivity } from "../../icons/DeviceConnectivity";
import { Expand05 } from "../../icons/Expand05";
import { Globe4 } from "../../icons/Globe4";
import { LayersThree1 } from "../../icons/LayersThree1";
import { MarkerPin31 } from "../../icons/MarkerPin31";
import { MarkerPin63 } from "../../icons/MarkerPin63";
import { Sun } from "../../icons/Sun";
import "./style.css";

export const DfDashboardLgtLg = () => {
  return (
    <div className="df-dashboard-lgt-lg">
      <div className="div-5" data-alias-mode="light">
        <div className="overlap-5">
          <Breadcrumbs
            chevronRight25Color="#667085"
            className="breadcrumbs-4"
            hasDiv={false}
            hasText={false}
            hasText1={false}
            hasText2={false}
            hasText3={false}
            hasText4={false}
            homeLine1Color="#667085"
            type="default"
            visible={false}
            visible1={false}
            visible2={false}
            visible3={false}
            visible4={false}
            visible5={false}
          />
          <div className="frame-23">
            <div className="frame-24">
              <div className="global-filters-wrapper">
                <div className="global-filters">
                  <div className="controls-5">
                    <SearchBar
                      chevronDownColor="#667085"
                      className="search-bar-4"
                      search5Color="#667085"
                      searchButton
                      text="Keyword, ID, Site, Address"
                      type="default"
                    />
                    <HorizontalTabs
                      className="horizontal-tabs-4"
                      horizontalTabsItemText="Wireless"
                      horizontalTabsItemText1="Wireline"
                      visible={false}
                      visible1={false}
                      visible2={false}
                    />
                    <Dropdown chevronDown7Color="#667085" className="dropdown-4" open={false} text="All Regions" />
                  </div>
                  <div className="fullscreen-toggle">
                    <Expand05 className="icon-instance-node-7" />
                  </div>
                </div>
              </div>
              <div className="frame-25">
                <div className="geo-map">
                  <MapZoomCoordinates className="map-zoom-coordinates-4" minusColor="#667085" plusColor="#667085" />
                  <div className="clusters">
                    <div className="cluster">
                      <div className="node">
                        <div className="overlap-group-2">
                          <div className="outer-ring" />
                          <div className="inner-ring" />
                          <MarkerPin63 className="marker-pin" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">3k</div>
                      </div>
                    </div>
                    <div className="cluster-2">
                      <div className="node">
                        <div className="overlap-group-3">
                          <div className="outer-ring-2" />
                          <div className="inner-ring-2" />
                          <MarkerPin63 className="marker-pin-16" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">15k</div>
                      </div>
                    </div>
                    <div className="cluster-3">
                      <div className="node">
                        <div className="overlap-group-4">
                          <div className="outer-ring-3" />
                          <div className="inner-ring-3" />
                          <MarkerPin63 className="marker-pin-15" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">28k</div>
                      </div>
                    </div>
                    <div className="cluster-4">
                      <div className="node">
                        <div className="overlap-group-5">
                          <div className="outer-ring-4" />
                          <div className="inner-ring-4" />
                          <MarkerPin63 className="marker-pin-5" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">12k</div>
                      </div>
                    </div>
                    <div className="cluster-5">
                      <div className="node">
                        <div className="overlap-group-6">
                          <div className="outer-ring-5" />
                          <div className="inner-ring-5" />
                          <MarkerPin63 className="marker-pin-23" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">4k</div>
                      </div>
                    </div>
                    <div className="cluster-6">
                      <div className="node">
                        <div className="overlap-group-3">
                          <div className="outer-ring-2" />
                          <div className="inner-ring-2" />
                          <MarkerPin63 className="marker-pin-16" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">15</div>
                      </div>
                    </div>
                    <div className="cluster-7">
                      <div className="node">
                        <div className="overlap-group-7">
                          <div className="outer-ring-6" />
                          <div className="inner-ring-6" />
                          <MarkerPin63 className="marker-pin-26" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">20k</div>
                      </div>
                    </div>
                    <div className="cluster-8">
                      <div className="node">
                        <div className="overlap-group-8">
                          <div className="outer-ring-7" />
                          <div className="inner-ring-7" />
                          <MarkerPin63 className="marker-pin-62" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">13k</div>
                      </div>
                    </div>
                    <div className="cluster-9">
                      <div className="node">
                        <div className="overlap-group-5">
                          <div className="outer-ring-4" />
                          <div className="inner-ring-4" />
                          <MarkerPin63 className="marker-pin-5" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">12k</div>
                      </div>
                    </div>
                    <div className="cluster-10">
                      <div className="node">
                        <div className="overlap-group-5">
                          <div className="outer-ring-4" />
                          <div className="inner-ring-4" />
                          <MarkerPin63 className="marker-pin-5" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">9k</div>
                      </div>
                    </div>
                    <div className="cluster-11">
                      <div className="node">
                        <div className="overlap-group-9">
                          <div className="outer-ring-8" />
                          <div className="inner-ring-8" />
                          <MarkerPin63 className="marker-pin-17" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">7k</div>
                      </div>
                    </div>
                    <div className="cluster-12">
                      <div className="node">
                        <div className="overlap-group-10">
                          <div className="outer-ring-9" />
                          <div className="inner-ring-9" />
                          <MarkerPin63 className="marker-pin-61" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">8k</div>
                      </div>
                    </div>
                    <div className="cluster-13">
                      <div className="node">
                        <div className="overlap-group-11">
                          <div className="outer-ring-10" />
                          <div className="inner-ring-10" />
                          <MarkerPin63 className="marker-pin-95" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">24k</div>
                      </div>
                    </div>
                    <div className="cluster-14">
                      <div className="node">
                        <div className="overlap-group-12">
                          <div className="outer-ring-11" />
                          <div className="inner-ring-11" />
                          <MarkerPin63 className="marker-pin-24" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">10k</div>
                      </div>
                    </div>
                    <div className="cluster-15">
                      <div className="node">
                        <div className="overlap-group-13">
                          <div className="outer-ring-12" />
                          <div className="inner-ring-12" />
                          <MarkerPin63 className="marker-pin-13" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">11k</div>
                      </div>
                    </div>
                    <div className="cluster-16">
                      <div className="node">
                        <div className="overlap-group-13">
                          <div className="outer-ring-12" />
                          <div className="inner-ring-12" />
                          <MarkerPin63 className="marker-pin-13" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">11k</div>
                      </div>
                    </div>
                    <div className="cluster-17">
                      <div className="node">
                        <div className="overlap-group-13">
                          <div className="outer-ring-12" />
                          <div className="inner-ring-12" />
                          <MarkerPin63 className="marker-pin-13" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">11k</div>
                      </div>
                    </div>
                    <div className="cluster-18">
                      <div className="node">
                        <div className="overlap-group-10">
                          <div className="outer-ring-9" />
                          <div className="inner-ring-9" />
                          <MarkerPin63 className="marker-pin-61" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">7k</div>
                      </div>
                    </div>
                    <div className="cluster-19">
                      <div className="node">
                        <div className="overlap-group-10">
                          <div className="outer-ring-9" />
                          <div className="inner-ring-9" />
                          <MarkerPin63 className="marker-pin-61" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">8k</div>
                      </div>
                    </div>
                    <div className="cluster-20">
                      <div className="node">
                        <div className="overlap-group-14">
                          <div className="outer-ring-13" />
                          <div className="inner-ring-13" />
                          <MarkerPin63 className="marker-pin-18" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">5k</div>
                      </div>
                    </div>
                    <div className="cluster-21">
                      <div className="node">
                        <div className="overlap-group-2">
                          <div className="outer-ring" />
                          <div className="inner-ring" />
                          <MarkerPin63 className="marker-pin" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">3k</div>
                      </div>
                    </div>
                    <div className="cluster-22">
                      <div className="node">
                        <div className="overlap-group-15">
                          <div className="outer-ring-14" />
                          <div className="inner-ring-14" />
                          <MarkerPin63 className="marker-pin-19" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">25k</div>
                      </div>
                    </div>
                    <div className="cluster-23">
                      <div className="node">
                        <div className="overlap-group-16">
                          <div className="outer-ring-12" />
                          <div className="inner-ring-12" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">11k</div>
                      </div>
                    </div>
                    <div className="overlap-6">
                      <div className="cluster-24">
                        <div className="node">
                          <div className="overlap-group-17">
                            <div className="outer-ring-8" />
                            <div className="inner-ring-8" />
                          </div>
                          <MarkerPin />
                        </div>
                        <div className="number-3">
                          <div className="text-wrapper-17">7k</div>
                        </div>
                      </div>
                      <div className="cluster-25">
                        <div className="node">
                          <div className="overlap-group-18">
                            <div className="outer-ring-15" />
                            <div className="inner-ring-15" />
                          </div>
                          <MarkerPin />
                        </div>
                        <div className="number-3">
                          <div className="text-wrapper-17">17k</div>
                        </div>
                      </div>
                    </div>
                    <div className="cluster-26">
                      <div className="node">
                        <div className="overlap-group-19">
                          <div className="outer-ring-16" />
                          <div className="inner-ring-16" />
                          <MarkerPin63 className="marker-pin-89" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">22k</div>
                      </div>
                    </div>
                    <div className="cluster-27">
                      <div className="node">
                        <div className="overlap-group-20">
                          <div className="outer-ring-17" />
                          <div className="inner-ring-17" />
                          <MarkerPin31 className="marker-pin-31" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">14k</div>
                      </div>
                    </div>
                    <div className="cluster-28">
                      <div className="node">
                        <div className="overlap-group-21">
                          <div className="outer-ring-18" />
                          <div className="inner-ring-18" />
                          <MarkerPin63 className="marker-pin-90" color="#101828" />
                        </div>
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">12k</div>
                      </div>
                    </div>
                    <div className="cluster-29">
                      <div className="node">
                        <div className="overlap-group-22">
                          <div className="outer-ring-11" />
                          <div className="inner-ring-11" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-3">
                        <div className="text-wrapper-17">10k</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="WIDGETS">
                  <div className="site-summary">
                    <div className="title-subtitle-wrapper">
                      <div className="title-subtitle">
                        <div className="text-wrapper-18">Sites Summary</div>
                        <div className="text-wrapper-19">571,713 total sites</div>
                        <div className="text-wrapper-20">Wireless Network</div>
                      </div>
                    </div>
                    <div className="frame-26">
                      <div className="frame-27">
                        <div className="table-header-cell">
                          <div className="table-header">
                            <div className="text-4">Site Type</div>
                            <ArrowDown24 className="arrow-down" />
                          </div>
                        </div>
                        <div className="table-cell">
                          <div className="text-5">Macro</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-5">Small Cell</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-5">Medium Cell</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-5">In Building</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-5">Hub</div>
                        </div>
                      </div>
                      <div className="frame-27">
                        <div className="table-header-wrapper">
                          <div className="table-header">
                            <div className="text-4">Site Count</div>
                            <ArrowDown24 className="arrow-down" />
                          </div>
                        </div>
                        <div className="table-cell">
                          <div className="text-6">187,364</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-6">149,672</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-6">90,456</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-6">80,963</div>
                        </div>
                        <div className="table-cell">
                          <div className="text-6">63,258</div>
                        </div>
                      </div>
                      <div className="frame-28">
                        <div className="table-header-cell-2">
                          <div className="table-header-2">
                            <div className="text-4">DQI</div>
                            <ArrowDown24 className="arrow-down" />
                          </div>
                        </div>
                        <div className="DQI-small-wrapper">
                          <div className="div-6">
                            <div className="frame-29">
                              <div className="div-6">
                                <div className="div-7">
                                  <div className="meter">
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-21">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-small-wrapper">
                          <div className="div-7">
                            <div className="frame-29">
                              <div className="div-7">
                                <div className="div-7">
                                  <div className="meter">
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-21">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-small-wrapper">
                          <div className="div-7">
                            <div className="frame-29">
                              <div className="div-7">
                                <div className="div-7">
                                  <div className="meter">
                                    <div className="rectangle-6" />
                                    <div className="rectangle-7" />
                                    <div className="rectangle-8" />
                                    <div className="rectangle-8" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-21">50%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-small-wrapper">
                          <div className="div-7">
                            <div className="frame-29">
                              <div className="div-7">
                                <div className="div-7">
                                  <div className="meter">
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-21">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-small-wrapper">
                          <div className="div-7">
                            <div className="frame-29">
                              <div className="div-7">
                                <div className="div-7">
                                  <div className="meter">
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                    <div className="rectangle-5" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-21">100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-widgets">
                    <div className="utilization-summary">
                      <div className="DQI-summary">
                        <div className="title-4">
                          <div className="title-subtitle">
                            <div className="text-wrapper-22">Utilization Summary</div>
                            <div className="text-wrapper-23">Wireless Network</div>
                          </div>
                        </div>
                        <div className="donut-chart">
                          <div className="overlap-wrapper">
                            <div className="overlap-7">
                              <div className="overlap-group-wrapper">
                                <div className="line-wrapper">
                                  <img className="line-2" alt="Line" src="/img/line-5.svg" />
                                </div>
                              </div>
                              <div className="number-4">34</div>
                            </div>
                          </div>
                          <div className="legend">
                            <div className="div-8">
                              <div className="frame-30">
                                <div className="ellipse-8" />
                                <div className="text-wrapper-24">Excellent</div>
                              </div>
                              <div className="text-wrapper-25">0-25</div>
                            </div>
                            <div className="div-8">
                              <div className="frame-30">
                                <div className="ellipse-9" />
                                <div className="text-wrapper-24">Good</div>
                              </div>
                              <div className="text-wrapper-25">25-50</div>
                            </div>
                            <div className="div-8">
                              <div className="frame-30">
                                <div className="ellipse-10" />
                                <div className="text-wrapper-24">Warning</div>
                              </div>
                              <div className="text-wrapper-25">50-75</div>
                            </div>
                            <div className="div-8">
                              <div className="frame-30">
                                <div className="ellipse-11" />
                                <div className="text-wrapper-24">Error</div>
                              </div>
                              <div className="text-wrapper-25">75-100</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="DQI-summary-2">
                      <div className="title-4">
                        <div className="title-subtitle">
                          <div className="text-wrapper-26">DQI Summary</div>
                          <div className="text-wrapper-27">Wireless Network</div>
                        </div>
                      </div>
                      <div className="chart-w-legend">
                        <div className="chart">
                          <div className="text-wrapper-28">88</div>
                          <div className="column-chart-2">
                            <div className="rectangle-9" />
                            <div className="rectangle-10" />
                            <div className="rectangle-11" />
                            <div className="rectangle-11" />
                            <div className="rectangle-12" />
                            <div className="rectangle-12" />
                            <div className="rectangle-13" />
                            <div className="rectangle-13" />
                          </div>
                        </div>
                        <div className="legend-2">
                          <div className="div-8">
                            <div className="text-wrapper-29">Best</div>
                            <div className="frame-30">
                              <div className="text-wrapper-30">80-100</div>
                              <div className="ellipse-9" />
                            </div>
                          </div>
                          <div className="div-8">
                            <div className="text-wrapper-29">Good</div>
                            <div className="frame-30">
                              <div className="text-wrapper-30">50-70</div>
                              <div className="ellipse-10" />
                            </div>
                          </div>
                          <div className="div-8">
                            <div className="text-wrapper-29">Fair</div>
                            <div className="frame-30">
                              <div className="text-wrapper-30">20-50</div>
                              <div className="ellipse-12" />
                            </div>
                          </div>
                          <div className="div-8">
                            <div className="text-wrapper-29">Poor</div>
                            <div className="frame-30">
                              <div className="text-wrapper-30">10-20</div>
                              <div className="ellipse-11" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Toolbar
              active={false}
              arrowLeftColor="#101828"
              className="toolbar-4"
              override={<DeviceConnectivity className="icon-instance-node-7" color="#101828" />}
              toolbarIconIcon={<LayersThree1 className="icon-instance-node-7" color="white" />}
              toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-7" color="#101828" />}
              toolbarIconIcon2={<Globe4 className="icon-instance-node-7" color="#101828" />}
              toolbarIconIcon3={<Sun className="icon-instance-node-7" color="#101828" />}
            />
          </div>
        </div>
        <Header className="header-5" menu2Color="#667085" userColor="#667085" />
      </div>
    </div>
  );
};
