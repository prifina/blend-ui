import React from "react";
import { addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";

import { baseStyles, ThemeProvider } from "@blend-ui/core";

const GlobalStyle = createGlobalStyle`
  body {
   ${baseStyles};
  }
 
`;

const themeProviderDecorator = story => {
  //console.log("STYLES ", GlobalStyle);

  return (
    <ThemeProvider>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  );
};
addDecorator(themeProviderDecorator);
