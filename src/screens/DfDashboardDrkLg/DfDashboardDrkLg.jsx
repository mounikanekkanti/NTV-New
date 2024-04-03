import React ,{useState} from "react";
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

export const DfDashboardDrkLg = () => {

  const [aliasMode, setAliasMode] = useState("dark");

  const [backgroundImage, setBackgroundImage] = useState('url(geo-map.0cc7013f.png)');

  const handleSunIconClick = () => {
    console.log(aliasMode);
    setAliasMode(aliasMode === "dark" ? "light" : "dark");
    updateAliasMode(aliasMode === "dark" ? "light" : "dark");
  };

  const updateAliasMode = (mode) => {
    document.body.setAttribute("data-alias-mode", mode);
    setBackgroundImage(mode === 'dark' ? 'url(geo-map.0cc7013f.png)' : 'url(geo-map2.7dcae7b4.png)');
  };

  const handleClick = () => {
    window.location.href = '/2';
  };
  return (
    <div className="df-dashboard-drk-lg">
      <div className="div-13">
        <div className="overlap-11">
          <Breadcrumbs
            chevronRight25Color="#98A2B3"
            className="breadcrumbs-6"
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
          <div className="frame-39">
            <div className="frame-40">
              <div className="basemap-control-bar-4">
                <div className="global-filters-3">
                  <div className="controls-7">
                    <SearchBar
                      chevronDownColor="#98A2B3"
                      className="search-bar-6"
                      search5Color="#98A2B3"
                      searchButton
                      text="Keyword, ID, Site, Address"
                      type="default"
                    />
                    <HorizontalTabs
                      className="horizontal-tabs-6"
                      horizontalTabsItemText="Wireless"
                      horizontalTabsItemText1="Wireline"
                      visible={false}
                      visible1={false}
                      visible2={false}
                    />
                    <Dropdown chevronDown7Color="#98A2B3" className="dropdown-6" open={false} text="All Regions" />
                  </div>
                  <div className="expand-05-wrapper" onClick={handleClick}>
                    <Expand05 className="icon-instance-node-9" />
                  </div>
                </div>
              </div>
              <div className="frame-41">
                <div className="geo-map-3" style={{ backgroundImage: backgroundImage }}>
                  <MapZoomCoordinates className="map-zoom-coordinates-6" minusColor="#98A2B3" plusColor="#98A2B3" />
                  <div className="clusters-3">
                    <div className="cluster-59">
                      <div className="node-3">
                        <div className="overlap-group-45">
                          <div className="outer-ring-37" />
                          <div className="inner-ring-37" />
                          <MarkerPin63 className="marker-pin-22" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">3k</div>
                      </div>
                    </div>
                    <div className="cluster-60">
                      <div className="node-3">
                        <div className="overlap-group-46">
                          <div className="outer-ring-38" />
                          <div className="inner-ring-38" />
                          <MarkerPin63 className="marker-pin-59" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">15k</div>
                      </div>
                    </div>
                    <div className="cluster-61">
                      <div className="node-3">
                        <div className="overlap-group-47">
                          <div className="outer-ring-39" />
                          <div className="inner-ring-39" />
                          <MarkerPin63 className="marker-pin-21" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">28k</div>
                      </div>
                    </div>
                    <div className="cluster-62">
                      <div className="node-3">
                        <div className="overlap-group-48">
                          <div className="outer-ring-40" />
                          <div className="inner-ring-40" />
                          <MarkerPin63 className="marker-pin-20" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">12k</div>
                      </div>
                    </div>
                    <div className="cluster-63">
                      <div className="node-3">
                        <div className="overlap-group-49">
                          <div className="outer-ring-41" />
                          <div className="inner-ring-41" />
                          <MarkerPin63 className="marker-pin-3" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">4k</div>
                      </div>
                    </div>
                    <div className="cluster-64">
                      <div className="node-3">
                        <div className="overlap-group-46">
                          <div className="outer-ring-38" />
                          <div className="inner-ring-38" />
                          <MarkerPin63 className="marker-pin-59" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">15</div>
                      </div>
                    </div>
                    <div className="cluster-65">
                      <div className="node-3">
                        <div className="overlap-group-50">
                          <div className="outer-ring-42" />
                          <div className="inner-ring-42" />
                          <MarkerPin63 className="marker-pin-58" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">20k</div>
                      </div>
                    </div>
                    <div className="cluster-66">
                      <div className="node-3">
                        <div className="overlap-group-51">
                          <div className="outer-ring-43" />
                          <div className="inner-ring-43" />
                          <MarkerPin63 className="marker-pin-82" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">13k</div>
                      </div>
                    </div>
                    <div className="cluster-67">
                      <div className="node-3">
                        <div className="overlap-group-48">
                          <div className="outer-ring-40" />
                          <div className="inner-ring-40" />
                          <MarkerPin63 className="marker-pin-20" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">12k</div>
                      </div>
                    </div>
                    <div className="cluster-68">
                      <div className="node-3">
                        <div className="overlap-group-48">
                          <div className="outer-ring-40" />
                          <div className="inner-ring-40" />
                          <MarkerPin63 className="marker-pin-20" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">9k</div>
                      </div>
                    </div>
                    <div className="cluster-69">
                      <div className="node-3">
                        <div className="overlap-group-52">
                          <div className="outer-ring-44" />
                          <div className="inner-ring-44" />
                          <MarkerPin63 className="marker-pin-11" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">7k</div>
                      </div>
                    </div>
                    <div className="cluster-70">
                      <div className="node-3">
                        <div className="overlap-group-53">
                          <div className="outer-ring-45" />
                          <div className="inner-ring-45" />
                          <MarkerPin63 className="marker-pin-32" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">8k</div>
                      </div>
                    </div>
                    <div className="cluster-71">
                      <div className="node-3">
                        <div className="overlap-group-54">
                          <div className="outer-ring-46" />
                          <div className="inner-ring-46" />
                          <MarkerPin63 className="marker-pin-92" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">24k</div>
                      </div>
                    </div>
                    <div className="cluster-72">
                      <div className="node-3">
                        <div className="overlap-group-55">
                          <div className="outer-ring-47" />
                          <div className="inner-ring-47" />
                          <MarkerPin63 className="marker-pin-97" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">10k</div>
                      </div>
                    </div>
                    <div className="cluster-73">
                      <div className="node-3">
                        <div className="overlap-group-56">
                          <div className="outer-ring-48" />
                          <div className="inner-ring-48" />
                          <MarkerPin63 className="marker-pin-88" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">11k</div>
                      </div>
                    </div>
                    <div className="cluster-74">
                      <div className="node-3">
                        <div className="overlap-group-56">
                          <div className="outer-ring-48" />
                          <div className="inner-ring-48" />
                          <MarkerPin63 className="marker-pin-88" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">11k</div>
                      </div>
                    </div>
                    <div className="cluster-75">
                      <div className="node-3">
                        <div className="overlap-group-56">
                          <div className="outer-ring-48" />
                          <div className="inner-ring-48" />
                          <MarkerPin63 className="marker-pin-88" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">11k</div>
                      </div>
                    </div>
                    <div className="cluster-76">
                      <div className="node-3">
                        <div className="overlap-group-53">
                          <div className="outer-ring-45" />
                          <div className="inner-ring-45" />
                          <MarkerPin63 className="marker-pin-32" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">7k</div>
                      </div>
                    </div>
                    <div className="cluster-77">
                      <div className="node-3">
                        <div className="overlap-group-53">
                          <div className="outer-ring-45" />
                          <div className="inner-ring-45" />
                          <MarkerPin63 className="marker-pin-32" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">8k</div>
                      </div>
                    </div>
                    <div className="cluster-78">
                      <div className="node-3">
                        <div className="overlap-group-57">
                          <div className="outer-ring-49" />
                          <div className="inner-ring-49" />
                          <MarkerPin63 className="marker-pin-91" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">5k</div>
                      </div>
                    </div>
                    <div className="cluster-79">
                      <div className="node-3">
                        <div className="overlap-group-45">
                          <div className="outer-ring-37" />
                          <div className="inner-ring-37" />
                          <MarkerPin63 className="marker-pin-22" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">3k</div>
                      </div>
                    </div>
                    <div className="cluster-80">
                      <div className="node-3">
                        <div className="overlap-group-58">
                          <div className="outer-ring-50" />
                          <div className="inner-ring-50" />
                          <MarkerPin63 className="marker-pin-63-instance" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">25k</div>
                      </div>
                    </div>
                    <div className="cluster-81">
                      <div className="node-3">
                        <div className="overlap-group-59">
                          <div className="outer-ring-48" />
                          <div className="inner-ring-48" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">11k</div>
                      </div>
                    </div>
                    <div className="overlap-12">
                      <div className="cluster-82">
                        <div className="node-3">
                          <div className="overlap-group-60">
                            <div className="outer-ring-44" />
                            <div className="inner-ring-44" />
                          </div>
                          <MarkerPin />
                        </div>
                        <div className="number-7">
                          <div className="text-wrapper-45">7k</div>
                        </div>
                      </div>
                      <div className="cluster-83">
                        <div className="node-3">
                          <div className="overlap-group-61">
                            <div className="outer-ring-51" />
                            <div className="inner-ring-51" />
                          </div>
                          <MarkerPin />
                        </div>
                        <div className="number-7">
                          <div className="text-wrapper-45">17k</div>
                        </div>
                      </div>
                    </div>
                    <div className="cluster-84">
                      <div className="node-3">
                        <div className="overlap-group-62">
                          <div className="outer-ring-52" />
                          <div className="inner-ring-52" />
                          <MarkerPin63 className="marker-pin-16-instance" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">22k</div>
                      </div>
                    </div>
                    <div className="cluster-85">
                      <div className="node-3">
                        <div className="overlap-group-63">
                          <div className="outer-ring-53" />
                          <div className="inner-ring-53" />
                          <MarkerPin31 className="marker-pin-106" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">14k</div>
                      </div>
                    </div>
                    <div className="cluster-86">
                      <div className="node-3">
                        <div className="overlap-group-64">
                          <div className="outer-ring-54" />
                          <div className="inner-ring-54" />
                          <MarkerPin63 className="marker-pin-15-instance" color="#101828" />
                        </div>
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">12k</div>
                      </div>
                    </div>
                    <div className="cluster-87">
                      <div className="node-3">
                        <div className="overlap-group-65">
                          <div className="outer-ring-47" />
                          <div className="inner-ring-47" />
                        </div>
                        <MarkerPin />
                      </div>
                      <div className="number-7">
                        <div className="text-wrapper-45">10k</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="WIDGETS-3">
                  <div className="site-summary-3">
                    <div className="title-7">
                      <div className="title-subtitle-3">
                        <div className="text-wrapper-46">Sites Summary</div>
                        <div className="text-wrapper-47">571,713 total sites</div>
                        <div className="text-wrapper-48">Wireless Network</div>
                      </div>
                    </div>
                    <div className="frame-42">
                      <div className="frame-43">
                        <div className="table-header-cell-6">
                          <div className="table-header-5">
                            <div className="text-14">Site Type</div>
                            <ArrowDown24 className="arrow-down-25" />
                          </div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-15">Macro</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-15">Small Cell</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-15">Medium Cell</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-15">In Building</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-15">Hub</div>
                        </div>
                      </div>
                      <div className="frame-43">
                        <div className="table-header-cell-7">
                          <div className="table-header-5">
                            <div className="text-14">Site Count</div>
                            <ArrowDown24 className="arrow-down-25" />
                          </div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-16">187,364</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-16">149,672</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-16">90,456</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-16">80,963</div>
                        </div>
                        <div className="table-cell-3">
                          <div className="text-16">63,258</div>
                        </div>
                      </div>
                      <div className="frame-44">
                        <div className="table-header-cell-8">
                          <div className="table-header-6">
                            <div className="text-14">DQI</div>
                            <ArrowDown24 className="arrow-down-25" />
                          </div>
                        </div>
                        <div className="DQI-rating-3">
                          <div className="div-14">
                            <div className="frame-45">
                              <div className="div-14">
                                <div className="div-15">
                                  <div className="meter-3">
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-49">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-3">
                          <div className="div-15">
                            <div className="frame-45">
                              <div className="div-15">
                                <div className="div-15">
                                  <div className="meter-3">
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-49">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-3">
                          <div className="div-15">
                            <div className="frame-45">
                              <div className="div-15">
                                <div className="div-15">
                                  <div className="meter-3">
                                    <div className="rectangle-24" />
                                    <div className="rectangle-25" />
                                    <div className="rectangle-26" />
                                    <div className="rectangle-26" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-49">50%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-3">
                          <div className="div-15">
                            <div className="frame-45">
                              <div className="div-15">
                                <div className="div-15">
                                  <div className="meter-3">
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-49">100%</div>
                            </div>
                          </div>
                        </div>
                        <div className="DQI-rating-3">
                          <div className="div-15">
                            <div className="frame-45">
                              <div className="div-15">
                                <div className="div-15">
                                  <div className="meter-3">
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                    <div className="rectangle-23" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-49">100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-widgets-3">
                    <div className="utilization-summary-2">
                      <div className="DQI-summary-5">
                        <div className="title-8">
                          <div className="title-subtitle-3">
                            <div className="text-wrapper-50">Utilization Summary</div>
                            <div className="text-wrapper-51">Wireless Network</div>
                          </div>
                        </div>
                        <div className="donut-chart-3">
                          <div className="progress-circle-3">
                            <div className="overlap-13">
                              <div className="ring-3">
                                <div className="overlap-group-66">
                                  <img className="line-4" alt="Line" src="/img/line-5.svg" />
                                </div>
                              </div>
                              <div className="number-8">34</div>
                            </div>
                          </div>
                          <div className="legend-5">
                            <div className="div-16">
                              <div className="frame-46">
                                <div className="ellipse-18" />
                                <div className="text-wrapper-52">Excellent</div>
                              </div>
                              <div className="text-wrapper-53">0-25</div>
                            </div>
                            <div className="div-16">
                              <div className="frame-46">
                                <div className="ellipse-19" />
                                <div className="text-wrapper-52">Good</div>
                              </div>
                              <div className="text-wrapper-53">25-50</div>
                            </div>
                            <div className="div-16">
                              <div className="frame-46">
                                <div className="ellipse-20" />
                                <div className="text-wrapper-52">Warning</div>
                              </div>
                              <div className="text-wrapper-53">50-75</div>
                            </div>
                            <div className="div-16">
                              <div className="frame-46">
                                <div className="ellipse-21" />
                                <div className="text-wrapper-52">Error</div>
                              </div>
                              <div className="text-wrapper-53">75-100</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="DQI-summary-6">
                      <div className="title-8">
                        <div className="title-subtitle-3">
                          <div className="text-wrapper-54">DQI Summary</div>
                          <div className="text-wrapper-55">Wireless Network</div>
                        </div>
                      </div>
                      <div className="chart-w-legend-3">
                        <div className="chart-3">
                          <div className="text-wrapper-56">88</div>
                          <div className="column-chart-4">
                            <div className="rectangle-27" />
                            <div className="rectangle-28" />
                            <div className="rectangle-29" />
                            <div className="rectangle-29" />
                            <div className="rectangle-30" />
                            <div className="rectangle-30" />
                            <div className="rectangle-31" />
                            <div className="rectangle-31" />
                          </div>
                        </div>
                        <div className="legend-6">
                          <div className="div-16">
                            <div className="text-wrapper-57">Best</div>
                            <div className="frame-46">
                              <div className="text-wrapper-58">80-100</div>
                              <div className="ellipse-19" />
                            </div>
                          </div>
                          <div className="div-16">
                            <div className="text-wrapper-57">Good</div>
                            <div className="frame-46">
                              <div className="text-wrapper-58">50-70</div>
                              <div className="ellipse-20" />
                            </div>
                          </div>
                          <div className="div-16">
                            <div className="text-wrapper-57">Fair</div>
                            <div className="frame-46">
                              <div className="text-wrapper-58">20-50</div>
                              <div className="ellipse-22" />
                            </div>
                          </div>
                          <div className="div-16">
                            <div className="text-wrapper-57">Poor</div>
                            <div className="frame-46">
                              <div className="text-wrapper-58">10-20</div>
                              <div className="ellipse-21" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Toolbar onSunIconClick={handleSunIconClick}
              active={false}
              arrowLeftColor="white"
              className="toolbar-6"
              override={<DeviceConnectivity className="icon-instance-node-9" color="var(--alias-icon-primary)" />}
              toolbarIconIcon={<LayersThree1 className="icon-instance-node-9" color="var(--alias-icon-primary)" />}
              toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-9" color="var(--alias-icon-primary)" />}
              toolbarIconIcon2={<Globe4 className="icon-instance-node-9" color="var(--alias-icon-primary)" />}
              toolbarIconIcon3={<Sun className="icon-instance-node-9" color="var(--alias-icon-primary)" />}
            />
          </div>
        </div>
        <Header className="header-7" menu2Color="#98A2B3" userColor="#98A2B3" />
      </div>
    </div>
  );
};
