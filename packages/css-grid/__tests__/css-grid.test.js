import React from "react";
import renderer from "react-test-renderer";

import { CssGrid as Grid, CssCell as Cell } from "@blend-ui/css-grid";

const MyGrid = () => (
  <Grid columns={2} gap="2px">
    <Cell>foo</Cell>
    <Cell height={2}>bar</Cell>
    <Cell width={2}>baz</Cell>
  </Grid>
);

describe("Creating component", () => {
  test("basic icon", () => {
    const component = renderer.create(<MyGrid />);
    const tree = component.toJSON();
    //console.log(tree.children);
    expect(tree).toMatchObject({
      type: "div",
      props: {
        className: "Grid__Grid-dQkvQV src__CssGrid-sc-1yjp0a9-0 jABXwb dwTfiY",
      },

      children: [
        {
          type: "div",
          props: {
            className:
              "Cell__Cell-jmncGN src__CssCell-sc-1yjp0a9-1 dvvRXD dOtmSn",
          },
          children: ["foo"],
        },
        {
          type: "div",
          props: {
            height: 2,
            className:
              "Cell__Cell-jmncGN src__CssCell-sc-1yjp0a9-1 gTRFno dOtmSn",
          },
          children: ["bar"],
        },
        {
          type: "div",
          props: {
            width: 2,
            className:
              "Cell__Cell-jmncGN src__CssCell-sc-1yjp0a9-1 edbHfo dOtmSn",
          },
          children: ["baz"],
        },
      ],
    });
  });
});
