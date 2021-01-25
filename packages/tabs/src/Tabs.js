import React, { forwardRef, createContext, useContext, useRef } from "react";

import styled, { css } from "styled-components";

import { useTheme } from "@blend-ui/core";
/*
.tab-list {
    border-bottom: 1px solid #ccc;
    padding-left: 0;
  }
  
  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
  }
  
  .tab-list-active {
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  }

  
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #aaa;
    z-index: 1;
  }
  ::before {
    z-index: 1;
  }

    #F5F8F7;
text-align: center;

  display: inline-block;
  list-style: none outside none;
  background-color: white;

  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid #00847a;
  font-size: 12px;
  color: #1e1d1d;
  position: relative;
  z-index: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  ::before,
  ::after {
    position: absolute;
    bottom: -1px;
    width: 6px;
    height: 6px;
    content: " ";
  }
  ::before {
    left: -8px;
    border-bottom-right-radius: 6px;
    border-width: 0 1px 1px 0;
    box-shadow: 2px 2px 0 red;
  }
  ::after {
    right: -8px;
    border-bottom-left-radius: 6px;
    border-width: 0 0 1px 1px;
    box-shadow: -2px 2px 0 red;
  }
  ::after,
  ::before {
    border: 1px solid transparent;
  }


  &:hover {
    border-style: solid;
    border-color: #c3c2c2;
    border-top-width: 1px;
    border-top-left-radius: 15px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-top-right-radius: 15px;

    &::before,
    &::after {
      position: absolute;
      bottom: -1px;
      width: 15px;
      height: 15px;
      content: " ";
    }
    &::before {
      left: -16px;
      border-bottom-right-radius: 11px;
      border-width: 0 1px 1px 0;
      border-left: 0px solid transparent;
      border-top: 0px solid transparent;
      border-right: 1px solid #c3c2c2;
      border-bottom: 1px solid #c3c2c2;
      box-shadow: 6px 0px 0 #00847a;
    }
    &::after {
      right: -16px;
      border-bottom-left-radius: 11px;
      border-width: 0 0 1px 1px;
      border-left: 1px solid transparent;
      border-top: 0px solid transparent;
      border-right: 0px solid #c3c2c2;
      border-bottom: 1px solid #c3c2c2;
      box-shadow: -6px 0px 0 #00847a;
    }

*/

const tabsCss = css`
  margin: 0;
  padding: 0;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid
      ${props =>
        props.theme && props.theme.colors
          ? props.theme.colors.baseSecondary
          : "#00847a"};
    z-index: 1;
  }
  ::before {
    z-index: 1;
    content: "${props => props.title}";
    color: ${props =>
      props.theme && props.theme.colors
        ? props.theme.colors.baseWhite
        : "#F5F8F7"};
    font-size: 18px;
    font-weight: 600;
    margin-left: 64px;
    margin-right: 45px;
  }
`;

const tabCss = css`
  text-align: center;

  display: inline-block;
  list-style: none outside none;
  background-color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseSecondary
      : "#00847a"};
  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseSecondary
      : "#00847a"};
  font-size: 12px;
  font-weight: 400;
  padding-top: 7px;
  padding-bottom: 21px;
  padding-left: 21px;
  padding-right: 21px;
  line-height: 16px;

  color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseWhite
      : "#F5F8F7"};
  position: relative;
  z-index: 0;
  cursor: pointer;

  }
`;

const selectedTab = css`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseWhite
      : "#F5F8F7"};
  color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.basePrimary
      : "#1E1D1D"};
  z-index: 2;
  border-bottom-color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseWhite
      : "#F5F8F7"};
  ::before,
  ::after {
    position: absolute;
    bottom: -1px;
    width: 30px;
    height: 30px;
    content: " ";
  }
  ::before {
    left: -32px;
    border-bottom-right-radius: 15px;
    border-width: 0 1px 1px 0;
  }
  ::after {
    right: -32px;
    border-bottom-left-radius: 11px;
    border-width: 0 0 1px 1px;
  }
  ::after,
  ::before {
    border: 1px solid transparent;
  }
  ::before {
    box-shadow: 6px 3px 0
      ${props =>
        props.theme && props.theme.colors
          ? props.theme.colors.baseWhite
          : "#F5F8F7"};
  }
  ::after {
    box-shadow: -6px 3px 0
      ${props =>
        props.theme && props.theme.colors
          ? props.theme.colors.baseWhite
          : "#F5F8F7"};
  }
`;
/*
const testVariation = props => {
  console.log("VARIATION ", props);
  return null;
};
*/
const UnorderedList = styled.ul`
  /* */
  ${tabsCss}
`;

const TabItem = styled.li`
  /* */
  ${tabCss}
  ${props => (props.selected ? selectedTab : null)}
`;

const TabPanelItem = styled.div`
  /* */
  z-index: 2;
  background-color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseWhite
      : "#F5F8F7"};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-top: 15px;
  height: 100%;
`;

const TabBackground = styled.div`
  /* */
  background-color: ${props =>
    props.theme && props.theme.colors
      ? props.theme.colors.baseSecondary
      : "#00847a"};
  /*border-top-left-radius: 15px;
  border-top-right-radius: 15px; */
  height: 100vh;
  border: 0px;
  padding-top: 65px;
`;

const TabContext = createContext();
const useTabContext = () => useContext(TabContext);

const Tabs = ({
  activeTab = 1,
  onClick,
  title = "",
  children,
  theme,
  ...props
}) => {
  console.log("TABS ", props, theme);
  const _theme = useTheme();
  const tabTheme = theme || _theme;
  console.log(_theme);
  let _tabList = null;
  let _panelList = null;
  if (children && Array.isArray(children) && children.length >= activeTab) {
    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement(child)) {
        if (child.type.displayName === "TabList") {
          _tabList = React.cloneElement(child, { theme: tabTheme });
        }
        if (child.type.displayName === "TabPanelList") {
          _panelList = React.cloneElement(child, { theme: tabTheme });
        }
      }
    });
  }

  return (
    <TabContext.Provider value={{ activeTab, onClick, title }}>
      <TabBackground theme={tabTheme}>
        {_tabList}
        {_panelList}
      </TabBackground>
    </TabContext.Provider>
  );
};

const Tab = forwardRef(({ tab, ...props }, ref) => {
  const { onClick } = useTabContext();
  const componentRef = useRef();
  const tabRef = ref || componentRef;

  return <TabItem {...props} onClick={e => onClick(e, tab)} ref={tabRef} />;
});

const TabList = ({ children, ...props }) => {
  const { activeTab, title } = useTabContext();

  const Items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return;

    if (child.type.displayName === "Tab") {
      if (index === activeTab) {
        return React.cloneElement(child, {
          selected: true,
          tab: index,
          ...props,
        });
      } else {
        return React.cloneElement(child, {
          tab: index,
          ...props,
        });
      }
    }
  });
  //return <React.Fragment>{Items}</React.Fragment>;
  return (
    <UnorderedList title={title} {...props}>
      {Items}
    </UnorderedList>
  );
};

const TabPanelList = ({ children, ...props }) => {
  const { activeTab } = useTabContext();
  let activePanel = null;
  //console.log("PANEL ", props);
  if (
    children &&
    Array.isArray(children) &&
    children.length >= activeTab &&
    React.isValidElement(children[activeTab])
  ) {
    activePanel = React.cloneElement(children[activeTab], { ...props });
  }
  //React.Children.map(children, (child, index) => {

  return <React.Fragment>{activePanel}</React.Fragment>;
};

const TabPanel = forwardRef((props, ref) => {
  return <TabPanelItem {...props} ref={ref} />;
});

Tabs.displayName = "Tabs";
Tab.displayName = "Tab";
TabList.displayName = "TabList";
TabPanel.displayName = "TabPanel";
TabPanelList.displayName = "TabPanelList";

export { Tabs, Tab, TabList, TabPanel, TabPanelList };
