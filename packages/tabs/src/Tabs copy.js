import React, { forwardRef } from "react";

import styled, { css } from "styled-components";

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
    border-bottom: 1px solid #00847a;
    z-index: 1;
  }
  ::before {
    z-index: 1;
  }
`;

const tabCss = css`
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
`;

const selectedTab = css`
  z-index: 2;
  border-bottom-color: #fff;
  ::before {
    box-shadow: 2px 2px 0 #fff;
  }
  ::after {
    box-shadow: -2px 2px 0 #fff;
  }
`;
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
  display: none;
`;

const Tabs = forwardRef((props, ref) => {
  return <UnorderedList {...props} ref={ref} />;
});

const Tab = forwardRef((props, ref) => {
  return <TabItem {...props} ref={ref} />;
});

const TabList = forwardRef((props, ref) => {
  return <div {...props} ref={ref} />;
});

const TabPanel = forwardRef((props, ref) => {
  return <TabPanelItem {...props} ref={ref} />;
});

export { Tabs, Tab, TabList, TabPanel };
