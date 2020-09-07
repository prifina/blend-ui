import React from "react";
import Grid from "../src/Grid";
import Cell from "../src/Cell";
import Text from "../src/Text";
import Flex from "../src/Flex";

export default { title: "Grid" };

export const grid = () => (
  <React.Fragment>
    <Grid direction="column" justify="center" minHeight="100vh">
      <Cell xs={12} textAlign="center" justify="center">
        <Flex p={2} border={"2px solid"} borderRadius={4} width="200px">
          <Text>Center this</Text>
        </Flex>
      </Cell>
    </Grid>
  </React.Fragment>
);
grid.story = {
  name: "Grid",
};

export const grid2 = () => (
  <React.Fragment>
    <Grid direction={"column"}>
      <Cell xs={3}>Cell 1</Cell>
      <Cell xs={6}>Cell 2</Cell>
    </Grid>
  </React.Fragment>
);
grid2.story = {
  name: "Grid Cells",
};
