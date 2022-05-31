import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "@blend-ui/core";

import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "@blend-ui/tabs";
const tabClick = (e, tab) => {
  console.log("Click", e);
  console.log("TAB", tab);
};

const activeTab = 0;
const MyTabs = () => (
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

describe("Creating component", () => {
  test("basic tabs", () => {
    const component = renderer.create(
      <ThemeProvider>
        <MyTabs />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    //console.log(JSON.stringify(tree));
    expect(tree).toMatchObject({
      type: "div",
      props: { className: "ThemeProvider__Base-sc-1w52cfi-0 fMEevm" },
      children: [
        {
          type: "ul",
          props: {
            title: "Account Settings",
            className: "Tabs__UnorderedList-sc-1330ez9-0 idZQxv",
          },
          children: [
            {
              type: "li",
              props: {
                selected: true,
                className: "Tabs__TabItem-sc-1330ez9-1 kWZEw",
              },
              children: ["User Details"],
            },
            {
              type: "li",
              props: { className: "Tabs__TabItem-sc-1330ez9-1 ekBWbQ" },
              children: ["Usage"],
            },
          ],
        },
        {
          type: "div",
          props: { className: "Tabs__TabPanelItem-sc-1330ez9-2 dXEiUx" },
          children: ["Eka panel"],
        },
      ],
    });
  });
});
