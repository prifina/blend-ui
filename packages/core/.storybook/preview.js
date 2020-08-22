import React from "react";
import { addDecorator } from "@storybook/react";

import ThemeProvider from "../src/theme/ThemeProvider";

const themeProviderDecorator = story => (
  <ThemeProvider>{story()}</ThemeProvider>
);
addDecorator(themeProviderDecorator);
