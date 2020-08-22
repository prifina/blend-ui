import sizes, { baseSizes } from "./sizes";
import typography from "./typography";
import colors from "./colors";
import createTextStyles from "./createTextStyles";
import createColorStyles from "./createColorStyles";
import createComponentStyles from "./createComponentStyles";

import { borderWidth } from "styled-system";
//console.log("SIZES ", Object.keys(sizes));
const createMediaQuery = n => `@media screen and (min-width:${n})`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      },
    }),
  );

export const breakpoints = [32, 40, 48, 64, 80].map(n => n + "em");

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ["sm", "md", "lg", "xl", "xxl"];

addAliases(mediaQueries, aliases);

export const space = baseSizes;

//export const font = `'Helvetica Neue',Helvetica,Arial,sans-serif,'Montserrat'`;
export const fonts = typography.fonts;
export const fontSizes = { ...baseSizes, ...typography.fontSizes };

const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

export { colors };

export const textStyles = createTextStyles({
  fontSizes,
  fontWeights: { ...typography.fontWeights },
  lineHeights: { ...typography.lineHeights },
  letterSpacings: { ...typography.letterSpacings },
  colors,
});
export const colorStyles = createColorStyles({
  colors,
});
// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = {
  none: "0",
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  full: "9999px",
  avatar: "4%",
  input: "0.25rem",
};

export const opacity = {
  "0": "0",
  "20%": "0.2",
  "40%": "0.4",
  "60%": "0.6",
  "80%": "0.8",
  "100%": "1",
};

export const radius = radii["md"];

// borders
export const borderWidths = { ...sizes.borderWidths };
export const borders = {
  input: {
    base: `${borderWidths["2xs"]} solid ${colors.borders.input}`,
    borderRadius: radii["input"],
  },
  select: {
    base: `${borderWidths["2xs"]} solid ${colors.borders.input}`,
    borderRadius: radii["input"],
  },
};

export const componentStyles = createComponentStyles({
  fontSizes,
  sizes,
  borders,
  colors,
});

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
];

export const textShadows = {
  sm: `0 1px 2px rgba(0,0,0,0.5)`,
  md: `0 2px 4px rgba(0,0,0,0.5)`,
};

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`,
};

// animation easing curves
const easeInOut = "cubic-bezier(0.5, 0, 0.25, 1)";
const easeOut = "cubic-bezier(0, 0, 0.25, 1)";
const easeIn = "cubic-bezier(0.5, 0, 1, 1)";

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
};

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`,
};

const theme = {
  breakpoints,
  mediaQueries,
  zIndices,
  sizes,
  space,
  fontSizes,
  fonts,
  fontWeights: { ...typography.fontWeights },
  lineHeights: { ...typography.lineHeights },
  letterSpacings: { ...typography.letterSpacings },
  colors,
  textStyles,
  colorStyles,
  componentStyles,
  radii,
  radius,
  borderWidths,
  borders,
  boxShadows,
  textShadows,
  duration,
  timingFunctions,
  transitionDelays,
};

export default theme;
