import React from "react";
import { addDecorator } from "@storybook/react";

import { ThemeProvider } from "@blend-ui/core";

const themeProviderDecorator = story => (
  <ThemeProvider>{story()}</ThemeProvider>
);
addDecorator(themeProviderDecorator);
