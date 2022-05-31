import React from "react";
import renderer from "react-test-renderer";
import { BlendIcon } from "@blend-ui/icons";

import rocketIcon from "@iconify/icons-fe/rocket";

import Input from "../src/Input";
import IconField from "../src/IconField";
import ThemeProvider from "../src/theme/ThemeProvider";

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
