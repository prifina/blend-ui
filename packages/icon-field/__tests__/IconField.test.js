import React from "react";
import renderer from "react-test-renderer";
import { BlendIcon } from "@blend-ui/icons";

import rocketIcon from "@iconify/icons-fe/rocket";

import Input from "@blend-ui/core";
import IconField from "../src/IconField";
import ThemeProvider from "@blend-ui/core";

test("IconField renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <IconField>
          <BlendIcon iconify={rocketIcon} />
          <Input placeholder={"Enter value here"} />
        </IconField>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
