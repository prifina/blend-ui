import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "../src/Tabs";

export default { title: "Tabs" };

export const tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab(tab);
  };

  return (
    <Tabs
      activeTab={activeTab}
      onClick={tabClick}
      title={"Account Settings"}
      style={{ height: "100vh" }}
      variant={"rectangle"}
    >
      <TabList>
        <Tab>User Details</Tab>
        <Tab test={true}>Usage</Tab>
        <Tab>Usage</Tab>
      </TabList>
      <TabPanelList>
        <TabPanel>Eka panel</TabPanel>
        <TabPanel>Toka panel</TabPanel>
        <TabPanel>Toka panel</TabPanel>
      </TabPanelList>
    </Tabs>
  );
};
tabs.story = {
  name: "Tabs",
};

/*
return (
  <Tabs
    activeTab={activeTab}
    onClick={tabClick}
    title={"Account Settings"}
    style={{ height: "100vh" }}
  >
    <TabList>
      <Tab>User Details</Tab>
      <Tab test={true}>Usage</Tab>
      <Tab>Settings</Tab>
      <Tab>Settings2</Tab>
    </TabList>
    <TabPanelList>
      <TabPanel>Eka panel</TabPanel>
      <TabPanel>Toka panel</TabPanel>
      <TabPanel>Kolmas panel</TabPanel>
      <TabPanel>Kolmas panel2</TabPanel>
    </TabPanelList>
  </Tabs>
);
};
*/
