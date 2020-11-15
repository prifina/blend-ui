import React from "react";
//import { Grid, Cell } from "styled-css-grid";
import { CssGrid as Grid, CssCell as Cell } from "../src";

const MyGrid = () => (
  <Grid columns={2} gap="2px">
    <Cell>foo</Cell>
    <Cell height={2}>bar</Cell>
    <Cell width={2}>baz</Cell>
  </Grid>
);

export default { title: "Grid" };

export const cssGrid = () => <MyGrid />;
cssGrid.story = {
  name: "Grid",
};
