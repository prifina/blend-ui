import React from "react";
import { addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import ThemeProvider from "../src/theme/ThemeProvider";

import { baseStyles } from "../src/theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
   ${baseStyles};
  }
 
`;

const themeProviderDecorator = story => {
  //console.log("STYLES ", GlobalStyle);

  return (
    <ThemeProvider mobileApp={true}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  );
};
addDecorator(themeProviderDecorator);
