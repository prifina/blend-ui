import React from "react";
import { addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";

import { ThemeProvider, baseStyles } from "@blend-ui/core";

const GlobalStyle = createGlobalStyle`
  body {
   ${baseStyles};
  }

`;

const themeProviderDecorator = story => {
  //console.log("STYLES ", GlobalStyle);

  return (
    <ThemeProvider mobileApp={true}>
      <>
        <GlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  );
};
addDecorator(themeProviderDecorator);
