import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "@blend-ui/tabs";

export default { title: "Tabs-dist" };

export const tabsDist = () => {
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
      variant={"line"}
    >
      <TabList>
        <Tab>User Details</Tab>
        <Tab test={true}>Usage</Tab>
      </TabList>
      <TabPanelList>
        <TabPanel>Eka panel</TabPanel>
        <TabPanel>Toka panel</TabPanel>
      </TabPanelList>
    </Tabs>
  );
};
tabsDist.story = {
  name: "Tabs",
};
