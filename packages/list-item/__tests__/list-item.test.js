import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "@blend-ui/core";
import { List, ListDivider, ListItem } from "@blend-ui/list-item";

describe("Creating component", () => {
  test("basic list", () => {
    const component = renderer.create(
      <ThemeProvider>
        <div>
          <List spacing={3}>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListDivider />
            <ListItem>
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
          </List>
        </div>
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
          props: {},
          children: [
            {
              type: "ul",
              props: { className: "List__UnorderedList-sc-1vk1afr-1 gWNyAo" },
              children: [
                {
                  type: "li",
                  props: {
                    spacing: 3,
                    className: "List__LiElement-sc-1vk1afr-3 cTeyhP",
                  },
                  children: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                  ],
                },
                {
                  type: "li",
                  props: {
                    spacing: 3,
                    className: "List__ListDivider-sc-1vk1afr-2 iepwnt",
                  },
                  children: null,
                },
                {
                  type: "li",
                  props: {
                    spacing: 3,
                    className: "List__LiElement-sc-1vk1afr-3 cTeyhP",
                  },
                  children: [
                    "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
