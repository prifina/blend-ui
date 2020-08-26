import React, { createRef } from "react";
import renderer from "react-test-renderer";
import Box from "../src/Box";

import ThemeProvider from "../src/theme/ThemeProvider";

test("Box renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Box
          width={[1 / 2]}
          height={"100px"}
          border={"1px solid"}
          borderRadius={4}
          p={2}
        >
          Something
        </Box>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Box renders sth with Ref correctly", () => {
  const boxRef = createRef();
  const tree2 = renderer
    .create(
      <ThemeProvider>
        <Box
          width={[1 / 2]}
          height={"100px"}
          border={"1px solid"}
          borderRadius={4}
          p={2}
          ref={boxRef}
          foo={"bar"}
        >
          Something with Ref
        </Box>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree2).toMatchSnapshot();
});
