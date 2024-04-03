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
import { MarkerPin63 } from "../../icons/MarkerPin63";
import { Sun } from "../../icons/Sun";
import "./style.css";

export const DfDashboardDrkSm = () => {
  return (
    <div className="df-dashboard-drk-sm">
      <div className="div-9" data-alias-mode="dark">
        <div className="overlap-8">
          <Breadcrumbs
            chevronRight25Color="#98A2B3"
            className="breadcrumbs-5"
            hasDiv={false}
            hasText={false}
            hasText1={false}
            hasText2={false}
            hasText3={false}
            hasText4={false}
            homeLine1Color="#98A2B3"
            type="default"
            visible={false}
            visible1={false}
            visible2={false}
            visible3={false}
            visible4={false}
            visible5={false}
          />
          <div className="frame-31">
            <div className="frame-32">
              <div className="basemap-control-bar-3">
                <div className="global-filters-2">
                  <div className="controls-6">
                    <SearchBar
                      chevronDownColor="#98A2B3"
                      className="search-bar-5"
                      search5Color="#98A2B3"
                      searchButton
                      text="Keyword, ID, Site, Address"
                      type="default"
                    />
                    <HorizontalTabs
                      className="horizontal-tabs-5"
                      horizontalTabsItemText="Wireless"
                      horizontalTabsItemText1="Wireline"
                      visible={false}
                      visible1={false}
                      visible2={false}
                    />
                    <Dropdown chevronDown7Color="#98A2B3" className="dropdown-5" open={false} text="All Regions" />
                  </div>
                  <div className="expand-wrapper">
                    <Expand05 className="icon-instance-node-8" />
                  </div>
                </div>
              </div>
              <div className="frame-33">
                <div className="geo-map-2">
                  <MapZoomCoordinates className="map-zoom-coordinates-5" minusColor="#98A2B3" plusColor="#98A2B3" />
                  <div className="clusters-2">
                    <div className="cluster-30">
                      <div className="node-2">
                        <div className="overlap-group-23">
                          <div className="outer-ring-19" />
                          <div className="inner-ring-19" />
                          <MarkerPin63 className="marker-pin-25" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">3k</div>
                      </div>
                    </div>
                    <div className="cluster-31">
                      <div className="node-2">
                        <div className="overlap-group-24">
                          <div className="outer-ring-20" />
                          <div className="inner-ring-20" />
                          <MarkerPin63 className="marker-pin-29" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">15k</div>
                      </div>
                    </div>
                    <div className="cluster-32">
                      <div className="node-2">
                        <div className="overlap-group-25">
                          <div className="outer-ring-21" />
                          <div className="inner-ring-21" />
                          <MarkerPin63 className="marker-pin-84" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">28k</div>
                      </div>
                    </div>
                    <div className="cluster-33">
                      <div className="node-2">
                        <div className="overlap-group-26">
                          <div className="outer-ring-22" />
                          <div className="inner-ring-22" />
                          <MarkerPin63 className="marker-pin-93" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">12k</div>
                      </div>
                    </div>
                    <div className="cluster-34">
                      <div className="node-2">
                        <div className="overlap-group-27">
                          <div className="outer-ring-23" />
                          <div className="inner-ring-23" />
                          <MarkerPin63 className="marker-pin-60" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">4k</div>
                      </div>
                    </div>
                    <div className="cluster-35">
                      <div className="node-2">
                        <div className="overlap-group-24">
                          <div className="outer-ring-20" />
                          <div className="inner-ring-20" />
                          <MarkerPin63 className="marker-pin-29" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">15</div>
                      </div>
                    </div>
                    <div className="cluster-36">
                      <div className="node-2">
                        <div className="overlap-group-28">
                          <div className="outer-ring-24" />
                          <div className="inner-ring-24" />
                          <MarkerPin63 className="marker-pin-14" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">20k</div>
                      </div>
                    </div>
                    <div className="cluster-37">
                      <div className="node-2">
                        <div className="overlap-group-29">
                          <div className="outer-ring-25" />
                          <div className="inner-ring-25" />
                          <MarkerPin63 className="marker-pin-9" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">13k</div>
                      </div>
                    </div>
                    <div className="cluster-38">
                      <div className="node-2">
                        <div className="overlap-group-26">
                          <div className="outer-ring-22" />
                          <div className="inner-ring-22" />
                          <MarkerPin63 className="marker-pin-93" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">12k</div>
                      </div>
                    </div>
                    <div className="cluster-39">
                      <div className="node-2">
                        <div className="overlap-group-26">
                          <div className="outer-ring-22" />
                          <div className="inner-ring-22" />
                          <MarkerPin63 className="marker-pin-93" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">9k</div>
                      </div>
                    </div>
                    <div className="cluster-40">
                      <div className="node-2">
                        <div className="overlap-group-30">
                          <div className="outer-ring-26" />
                          <div className="inner-ring-26" />
                          <MarkerPin63 className="marker-pin-98" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">7k</div>
                      </div>
                    </div>
                    <div className="cluster-41">
                      <div className="node-2">
                        <div className="overlap-group-31">
                          <div className="outer-ring-27" />
                          <div className="inner-ring-27" />
                          <MarkerPin63 className="marker-pin-4" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">8k</div>
                      </div>
                    </div>
                    <div className="cluster-42">
                      <div className="node-2">
                        <div className="overlap-group-32">
                          <div className="outer-ring-28" />
                          <div className="inner-ring-28" />
                          <MarkerPin63 className="marker-pin-99" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">24k</div>
                      </div>
                    </div>
                    <div className="cluster-43">
                      <div className="node-2">
                        <div className="overlap-group-33">
                          <div className="outer-ring-29" />
                          <div className="inner-ring-29" />
                          <MarkerPin63 className="marker-pin-94" color="#101828" />
                        </div>
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">10k</div>
                      </div>
                    </div>
                    <div className="cluster-44">
                      <div className="node-2">
                        <div className="overlap-group-34">
                          <div className="outer-ring-30" />
                          <div className="inner-ring-30" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">11k</div>
                      </div>
                    </div>
                    <div className="cluster-45">
                      <div className="node-2">
                        <div className="overlap-group-34">
                          <div className="outer-ring-30" />
                          <div className="inner-ring-30" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">11k</div>
                      </div>
                    </div>
                    <div className="cluster-46">
                      <div className="node-2">
                        <div className="overlap-group-34">
                          <div className="outer-ring-30" />
                          <div className="inner-ring-30" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">11k</div>
                      </div>
                    </div>
                    <div className="cluster-47">
                      <div className="node-2">
                        <div className="overlap-group-35">
                          <div className="outer-ring-27" />
                          <div className="inner-ring-27" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">7k</div>
                      </div>
                    </div>
                    <div className="cluster-48">
                      <div className="node-2">
                        <div className="overlap-group-35">
                          <div className="outer-ring-27" />
                          <div className="inner-ring-27" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">8k</div>
                      </div>
                    </div>
                    <div className="cluster-49">
                      <div className="node-2">
                        <div className="overlap-group-36">
                          <div className="outer-ring-31" />
                          <div className="inner-ring-31" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">5k</div>
                      </div>
                    </div>
                    <div className="cluster-50">
                      <div className="node-2">
                        <div className="overlap-group-37">
                          <div className="outer-ring-19" />
                          <div className="inner-ring-19" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">3k</div>
                      </div>
                    </div>
                    <div className="cluster-51">
                      <div className="node-2">
                        <div className="overlap-group-38">
                          <div className="outer-ring-32" />
                          <div className="inner-ring-32" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">25k</div>
                      </div>
                    </div>
                    <div className="cluster-52">
                      <div className="node-2">
                        <div className="overlap-group-34">
                          <div className="outer-ring-30" />
                          <div className="inner-ring-30" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">11k</div>
                      </div>
                    </div>
                    <div className="overlap-9">
                      <div className="cluster-53">
                        <div className="node-2">
                          <div className="overlap-group-39">
                            <div className="outer-ring-26" />
                            <div className="inner-ring-26" />
                          </div>
                          <MarkerPin />
                        </div>
                        <div className="number-5">
                          <div className="text-wrapper-31">7k</div>
                        </div>
                      </div>
                      <div className="cluster-54">
                        <div className="node-2">
                          <div className="overlap-group-40">
                            <div className="outer-ring-33" />
                            <div className="inner-ring-33" />
                          </div>
                          <MarkerPin />
                        </div>
                        <div className="number-5">
                          <div className="text-wrapper-31">17k</div>
                        </div>
                      </div>
                    </div>
                    <div className="cluster-55">
                      <div className="node-2">
                        <div className="overlap-group-41">
                          <div className="outer-ring-34" />
                          <div className="inner-ring-34" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">22k</div>
                      </div>
                    </div>
                    <div className="cluster-56">
                      <div className="node-2">
                        <div className="overlap-group-42">
                          <div className="outer-ring-35" />
                          <div className="inner-ring-35" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">14k</div>
                      </div>
                    </div>
                    <div className="cluster-57">
                      <div className="node-2">
                        <div className="overlap-group-43">
                          <div className="outer-ring-36" />
                          <div className="inner-ring-36" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">12k</div>
                      </div>
                    </div>
                    <div className="cluster-58">
                      <div className="node-2">
                        <div className="overlap-group-44">
                          <div className="outer-ring-29" />
                          <div className="inner-ring-29" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-5">
                        <div className="text-wrapper-31">10k</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="WIDGETS-2">
                  <div className="site-summary-2">
                    <div className="title-5">
                      <div className="title-subtitle-2">
                        <div className="text-wrapper-32">Sites Summary</div>
                        <div className="text-wrapper-33">571,713 total sites</div>
                        <div className="text-wrapper-34">Wireless Network</div>
                      </div>
                    </div>
                    <div className="frame-34">
                      <div className="frame-35">
                        <div className="table-header-cell-3">
                          <div className="table-header-3">
                            <div className="text-7">Site Type</div>
                            <ArrowDown24 className="arrow-down-24" />
                          </div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-8">Macro</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-9">Small Cell</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-10">Medium Cell</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-11">In Building</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-8">Hub</div>
                        </div>
                      </div>
                      <div className="frame-35">
                        <div className="table-header-cell-4">
                          <div className="table-header-3">
                            <div className="text-12">Site Count</div>
                            <ArrowDown24 className="arrow-down-26" />
                          </div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-13">187,364</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-13">149,672</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-13">90,456</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-13">80,963</div>
                        </div>
                        <div className="table-cell-2">
                          <div className="text-13">63,258</div>
                        </div>
                      </div>
                      <div className="frame-36">
                        <div className="table-header-cell-5">
                          <div className="table-header-4">
                            <div className="text-7">DQI</div>
                            <ArrowDown24 className="arrow-down-2" />
                          </div>
                        </div>
                        <div className="DQI-rating-2">
                          <div className="div-10">
                            <div className="frame-37">
                              <div className="div-10">
                                <div className="div-11">
                                  <div className="meter-2">
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-35">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-2">
                          <div className="div-11">
                            <div className="frame-37">
                              <div className="div-11">
                                <div className="div-11">
                                  <div className="meter-2">
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-35">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-2">
                          <div className="div-11">
                            <div className="frame-37">
                              <div className="div-11">
                                <div className="div-11">
                                  <div className="meter-2">
                                    <div className="rectangle-15" />
                                    <div className="rectangle-16" />
                                    <div className="rectangle-17" />
                                    <div className="rectangle-17" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-35">50%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-2">
                          <div className="div-11">
                            <div className="frame-37">
                              <div className="div-11">
                                <div className="div-11">
                                  <div className="meter-2">
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-35">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-2">
                          <div className="div-11">
                            <div className="frame-37">
                              <div className="div-11">
                                <div className="div-11">
                                  <div className="meter-2">
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                    <div className="rectangle-14" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-35">100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-widgets-2">
                    <div className="DQI-summary-wrapper">
                      <div className="DQI-summary-3">
                        <div className="title-6">
                          <div className="title-subtitle-2">
                            <div className="text-wrapper-36">Utilization Summary</div>
                            <div className="text-wrapper-37">Wireless Network</div>
                          </div>
                        </div>
                        <div className="donut-chart-2">
                          <div className="progress-circle-2">
                            <div className="overlap-10">
                              <div className="ring-2">
                                <div className="img-wrapper">
                                  <img className="line-3" alt="Line" src="/img/line-23.svg" />
                                </div>
                              </div>
                              <div className="number-6">34</div>
                            </div>
                          </div>
                          <div className="legend-3">
                            <div className="div-12">
                              <div className="frame-38">
                                <div className="ellipse-13" />
                                <div className="text-wrapper-38">Excellent</div>
                              </div>
                              <div className="text-wrapper-39">0-25</div>
                            </div>
                            <div className="div-12">
                              <div className="frame-38">
                                <div className="ellipse-14" />
                                <div className="text-wrapper-38">Good</div>
                              </div>
                              <div className="text-wrapper-39">25-50</div>
                            </div>
                            <div className="div-12">
                              <div className="frame-38">
                                <div className="ellipse-15" />
                                <div className="text-wrapper-38">Warning</div>
                              </div>
                              <div className="text-wrapper-39">50-75</div>
                            </div>
                            <div className="div-12">
                              <div className="frame-38">
                                <div className="ellipse-16" />
                                <div className="text-wrapper-38">Error</div>
                              </div>
                              <div className="text-wrapper-39">75-100</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="DQI-summary-4">
                      <div className="title-6">
                        <div className="title-subtitle-2">
                          <div className="text-wrapper-40">DQI Summary</div>
                          <div className="text-wrapper-41">Wireless Network</div>
                        </div>
                      </div>
                      <div className="chart-w-legend-2">
                        <div className="chart-2">
                          <div className="text-wrapper-42">88</div>
                          <div className="column-chart-3">
                            <div className="rectangle-18" />
                            <div className="rectangle-19" />
                            <div className="rectangle-20" />
                            <div className="rectangle-20" />
                            <div className="rectangle-21" />
                            <div className="rectangle-21" />
                            <div className="rectangle-22" />
                            <div className="rectangle-22" />
                          </div>
                        </div>
                        <div className="legend-4">
                          <div className="div-12">
                            <div className="text-wrapper-43">Best</div>
                            <div className="frame-38">
                              <div className="text-wrapper-44">80-100</div>
                              <div className="ellipse-14" />
                            </div>
                          </div>
                          <div className="div-12">
                            <div className="text-wrapper-43">Good</div>
                            <div className="frame-38">
                              <div className="text-wrapper-44">50-70</div>
                              <div className="ellipse-15" />
                            </div>
                          </div>
                          <div className="div-12">
                            <div className="text-wrapper-43">Fair</div>
                            <div className="frame-38">
                              <div className="text-wrapper-44">20-50</div>
                              <div className="ellipse-17" />
                            </div>
                          </div>
                          <div className="div-12">
                            <div className="text-wrapper-43">Poor</div>
                            <div className="frame-38">
                              <div className="text-wrapper-44">10-20</div>
                              <div className="ellipse-16" />
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
              arrowLeftColor="white"
              className="toolbar-5"
              override={<DeviceConnectivity className="icon-instance-node-8" color="white" />}
              toolbarIconIcon={<LayersThree1 className="icon-instance-node-8" color="white" />}
              toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-8" color="white" />}
              toolbarIconIcon2={<Globe4 className="icon-instance-node-8" color="white" />}
              toolbarIconIcon3={<Sun className="icon-instance-node-8" color="white" />}
            />
          </div>
        </div>
        <Header className="header-6" menu2Color="#98A2B3" userColor="#98A2B3" />
      </div>
    </div>
  );
};
