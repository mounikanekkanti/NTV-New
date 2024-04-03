import React ,{useState} from "react";
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
import { string } from "prop-types";

export const ApplicationScreenScreen = () => {
  const [subNavVisible, setSubNavVisible] = useState(false);
  const [filterPanelVisible, setFilterPanelVisible] = useState(false);
  const [aliasMode, setAliasMode] = useState("dark");
  const [backgroundImage, setBackgroundImage] = useState('url(regional-map-1.228fcfb6.png)');

  const handleSunIconClick = () => {
    console.log(aliasMode);
    setAliasMode(aliasMode === "dark" ? "light" : "dark");
    updateAliasMode(aliasMode === "dark" ? "light" : "dark");
  };

  const updateAliasMode = (mode) => {
    document.body.setAttribute("data-alias-mode", mode);
    setBackgroundImage(mode === 'dark' ? 'url(regional-map-1.228fcfb6.png)' : 'url(regional-map2.58b179f7.png)');
  };

  const handleToolbarLayersClick = () => {
    setSubNavVisible(!subNavVisible);
    setFilterPanelVisible(filterPanelVisible)
  };

  const handleSubNavClick = () => {
    if(subNavVisible ==  true) {
    setFilterPanelVisible(!filterPanelVisible)
  };
  };
  return (
    <div className="application-screen-screen">
      <div className="application-screen-2">
        <div className="overlap-3">
          <div className="regional-map-2" style={{ backgroundImage: backgroundImage }} />
          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="frame-13">
                    <div className="controls-wrapper">
                      <div className="controls-3">
                        <SearchBar className="search-bar-2" searchButton type="filled" />
                        <HorizontalTabs
                          className="horizontal-tabs-2"
                          horizontalTabsItemText="Wireless"
                          horizontalTabsItemText1="Wireline"
                          visible={false}
                          visible1={false}
                          visible2={false}
                        />
                        <Dropdown className="dropdown-2" open={false} text="All Regions" />
                      </div>
                    </div>
                    <div className="frame-14">
                      <div className="title-2">
                        <Breadcrumbs
                          className="breadcrumbs-2"
                          hasDiv={false}
                          hasText={false}
                          text="Wireless Network"
                          text1="Tampa, FL"
                          text2="Core Connection"
                          type="default"
                          visible={false}
                          visible1={false}
                        />
                        <div className="text-wrapper-13">Wireless Network</div>
                      </div>
                      <div className="sites-wrapper">
                        <div className="sites-2">
                          <div className="site-types-3">SITE TYPES</div>
                          <div className="macro-3">
                            <div className="site-types-4">
                              <div className="macro-4" />
                            </div>
                            <div className="text-wrapper-14">Macro</div>
                          </div>
                          <div className="macro-3">
                            <div className="site-types-4">
                              <div className="small-cell-2" />
                            </div>
                            <div className="text-wrapper-14">Small Cell</div>
                          </div>
                          <div className="macro-3">
                            <div className="site-types-4">
                              <img className="med-cell-2" alt="Med cell" src="/img/med-cell.svg" />
                            </div>
                            <div className="text-wrapper-14">Med Cell</div>
                          </div>
                          <div className="macro-3">
                            <div className="site-types-4">
                              <img className="union-2" alt="Union" src="/img/union-10.svg" />
                            </div>
                            <div className="text-wrapper-14">In Building</div>
                          </div>
                          <div className="macro-3">
                            <div className="site-types-5">
                              <div className="ellipse-6" />
                            </div>
                            <div className="text-wrapper-14">Hub</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <WidgetGroup columnWidgetBarChart="/img/bar-chart-1.svg" type="default" />
                    <MapZoomCoordinates className="map-zoom-coordinates-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="layers-filters-pane-2">
            {filterPanelVisible && subNavVisible && (
              <FilterPanel
                accordionLabel="Site Types"
                accordionLabel1="Quality"
                accordionLabel2="Filter Capacity"
                className="design-component-instance-node-3"
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
            )}
              {subNavVisible && (
              <SubNav
                className="design-component-instance-node-3"
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
                onClick={handleSubNavClick}
              />
              )}
              <Toolbar onSunIconClick={handleSunIconClick}
                active
                className="toolbar-2"
                override={<DeviceConnectivity className="icon-instance-node-5" color="var(--alias-icon-primary)" />}
                toolbarIconIcon={<LayersThree1 onClick={handleToolbarLayersClick} className="icon-instance-node-5" color="var(--alias-icon-primary)" />}
                toolbarIconIcon1={<MarkerPin63 className="icon-instance-node-5" color="var(--alias-icon-primary)" />}
                toolbarIconIcon2={<Globe4 className="icon-instance-node-5" color="var(--alias-icon-primary)" />}
                toolbarIconIcon3={<Sun className="icon-instance-node-5" color="var(--alias-icon-primary)" />}
              />
            </div>
          </div>
        </div>
        <Header className="header-3" />
      </div>
    </div>
  );
};
