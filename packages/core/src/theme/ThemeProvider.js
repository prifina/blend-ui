import React, { useContext } from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
} from "styled-components";
import { default as defaultTheme } from "./theme";

export const Base = styled.div`
  font-family: ${props => props.theme.fonts.body || null};
  font-weight: ${props => props.theme.fontWeights.medium || null};
  line-height: ${props => props.theme.lineHeights.standard || null};

  * {
    box-sizing: border-box;
  }
`;

const ThemeProvider = ({ theme = {}, ...props }) => {
  //console.log("THEME PROVIDER ", theme, defaultTheme);
  const mergedTheme = { ...defaultTheme, ...theme };
  return (
    <StyledThemeProvider theme={mergedTheme}>
      <Base {...props} />
    </StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  defaultTheme,
};

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export default ThemeProvider;
export { useTheme };
