import React from "react";
import renderer from "react-test-renderer";
import Divider from "../src/Divider";
import ThemeProvider from "../src/theme/ThemeProvider";

test("Divider renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Divider />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
