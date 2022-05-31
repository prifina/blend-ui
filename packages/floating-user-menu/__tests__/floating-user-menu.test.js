import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import {
  UserMenuContextProvider,
  useUserMenu,
} from "@blend-ui/floating-user-menu";

import { ThemeProvider } from "@blend-ui/core";

import { RecentApps } from "../backup/RecentApps";

const MyMenu = props => (
  <div style={{ pointerEvents: "all", cursor: "pointer" }}>
    <div>User menu test</div>
    <button
      onClick={() => {
        console.log("UPDATE CLICK");
        props.floatingUserMenu.onUpdate(111);
      }}
    >
      UPDATE
    </button>
  </div>
);

function ComponentDist() {
  const floatingUserMenu = useUserMenu();
  console.log("Context inside Component", typeof floatingUserMenu);
  //console.log("ALERTS", toast.alerts.length > 0 ? toast.alerts[0] : null);
  //console.log(RecentApps);

  useEffect(() => {
    floatingUserMenu.show({
      effect: { hover: { width: 42 } },
      initials: "TA",
      notifications: 9,
      RecentApps: RecentApps,
    });
    //console.log(RecentApps);
  }, [floatingUserMenu]);

  return <MyMenu floatingUserMenu={floatingUserMenu} />;
}

describe("Creating component", () => {
  // otherwise createPortal throws warning...
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  test("basic usermenu", () => {
    const component = renderer.create(
      <ThemeProvider>
        <UserMenuContextProvider>
          <ComponentDist />
        </UserMenuContextProvider>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    //console.log(JSON.stringify(tree));
    expect(tree).toMatchObject({
      type: "div",
      props: { className: "ThemeProvider__Base-sc-1w52cfi-0 fMEevm" },
      children: [
        {
          type: "div",
          props: { style: { pointerEvents: "all", cursor: "pointer" } },
          children: [
            { type: "div", props: {}, children: ["User menu test"] },
            { type: "button", props: {}, children: ["UPDATE"] },
          ],
        },
        {
          type: "div",
          props: {
            id: "blend-usermenu-1",
            className: "FloatingUserMenu__Base-sc-uq210f-0 guNSmg",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  curson: "pointer",
                  margin: "15px",
                  filter: "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))",
                },
                className:
                  "Box__BoxElement-sc-12sd5m8-0 jieplu Avatar__InitialsElement-sc-sim7fl-0 dLHVtw",
              },
              children: [
                {
                  type: "span",
                  props: { className: "Text__TextElement-sc-z9dcxz-0" },
                  children: ["TA"],
                },
              ],
            },
            {
              type: "span",
              props: {
                className: "FloatingUserMenu__Badge-sc-uq210f-7 bBTiqS",
              },
              children: ["9"],
            },
          ],
        },
      ],
    });
  });
});
