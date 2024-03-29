/*   */
const basePrimary = "#1E1D1D";
const baseSecondary = "#00847A";
const baseTertiary = "#ECF5F2";
const baseMuted = "#C3C2C2";
const baseWhite = "#F5F8F7";
const baseError = "#F40431";
const baseErrorHover = "#FD4E4E";
const baseLink = "#007AFF";
const baseSuccess = "#84BC4F";
const baseHover = "#1CAA9F";
const baseLinkHover = "#539EF0";
const baseInputDisabled = "#E5E4E4";
const baseModalBackground = "rgba(30, 29, 29, 0.75)";
const baseDividers = "#C9E4E0";

const baseBright = "#F8FCFC";

const subtleHiover = "#DBF0EE";

const menuModalBackground = "rgba(30, 29, 29, 0.1)";

const alertErrorText = "#f40431";
const alertErrorBackground = "#fed7d7";
const alertWarningText = "#cb8e12";
const alertWarningBackground = "#fcefc2";
const alertInfoText = "#007aff";
const alertInfoBackground = "#d1eaf9";
const alertSuccessText = "#7caf4c";
const alertSuccessBackground = "#def0d8";

const brandPrimary = "#F6F6F6";
const brandSecondary = "#1E1D1D";
const brandAccent = "#00847A";

const textPrimary = basePrimary;
const textMuted = baseMuted;
const textLight = "#FFFFFF";
const textError = baseError;
const textLink = baseLink;
const textAccent = baseSecondary;

const componentPrimary = baseSecondary;
const componentSecondary = basePrimary;
const componentAccent = baseSecondary;
const componentLightText = "#FFFFFF";
const componentDarkText = "#D1D1D1";
const componentBorder = "#D1D6DB";

const backgroundPrimary = "#F6F6F6";
const backgroundSecondary = "#1E1D1D";
const backgroundAccent = "#00847A";
const backgroundMuted = "#7DC0BA";
const backgroundError = "#FFCCCC";
const backgroundNotification = "#F40431";
const backgroundLight = "#FFFFFF";

const avatarColors = [
  "#3BE8B0",
  "#3BF7D1",
  "#1AAFD0",
  "#02CEFF",
  "#6A67CE",
  "#A177FF",
  "#FFB900",
  "#DB00FF",
  "#2E3C54",
  "#FF00B8",
];

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  alert: {
    error: {
      color: alertErrorText,
      backgroundColor: alertErrorBackground,
    },
    warning: {
      color: alertWarningText,
      backgroundColor: alertWarningBackground,
    },
    info: {
      color: alertInfoText,
      backgroundColor: alertInfoBackground,
    },
    success: {
      color: alertSuccessText,
      backgroundColor: alertSuccessBackground,
    },
  },

  brand: {
    primary: brandPrimary,
    secondary: brandSecondary,
    accent: brandAccent,
  },
  text: {
    primary: textPrimary,
    muted: textMuted,
    light: textLight,
    error: textError,
    link: textLink,
    accent: textAccent,
  },
  component: {
    primary: componentPrimary,
    secondary: componentSecondary,
    accent: componentAccent,
    light: componentLightText,
    dark: componentDarkText,
    border: componentBorder,
  },
  background: {
    primary: backgroundPrimary,
    secondary: backgroundSecondary,
    accent: backgroundAccent,
    muted: backgroundMuted,
    error: backgroundError,
    notification: backgroundNotification,
    light: backgroundLight,
  },

  brandPrimary,
  brandSecondary,
  brandAccent,
  textPrimary,
  textMuted,
  textLight,
  textError,
  textLink,
  textAccent,

  componentPrimary,
  componentSecondary,
  componentAccent,
  componentLightText,
  componentDarkText,
  componentBorder,

  backgroundPrimary,
  backgroundSecondary,
  backgroundAccent,
  backgroundMuted,
  backgroundError,
  backgroundNotification,
  backgroundLight,
  basePrimary,
  baseSecondary,
  baseTertiary,
  baseMuted,
  baseWhite,
  baseError,
  baseLink,
  baseSuccess,
  baseHover,
  baseLinkHover,
  baseInputDisabled,
  baseModalBackground,
  baseErrorHover,
  baseDividers,
  baseBright,
  menuModalBackground,
  avatarColors,
  subtleHiover,
};

export const palette = {
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)",
  },

  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)",
  },

  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },

  red: {
    50: "#fff5f5",
    100: "#fed7d7",
    200: "#feb2b2",
    300: "#fc8181",
    400: "#f56565",
    500: "#e53e3e",
    600: "#c53030",
    700: "#9b2c2c",
    800: "#822727",
    900: "#63171b",
  },

  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19",
  },

  yellow: {
    50: "#fffff0",
    100: "#fefcbf",
    200: "#faf089",
    300: "#f6e05e",
    400: "#ecc94b",
    500: "#d69e2e",
    600: "#b7791f",
    700: "#975a16",
    800: "#744210",
    900: "#5F370E",
  },

  green: {
    50: "#f0fff4",
    100: "#c6f6d5",
    200: "#9ae6b4",
    300: "#68d391",
    400: "#48bb78",
    500: "#38a169",
    600: "#2f855a",
    700: "#276749",
    800: "#22543d",
    900: "#1C4532",
  },

  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044",
  },

  blue: {
    50: "#ebf8ff",
    100: "#ceedff",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2a69ac",
    700: "#1e4e8c",
    800: "#153e75",
    900: "#1a365d",
  },

  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666",
  },

  purple: {
    50: "#faf5ff",
    100: "#e9d8fd",
    200: "#d6bcfa",
    300: "#b794f4",
    400: "#9f7aea",
    500: "#805ad5",
    600: "#6b46c1",
    700: "#553c9a",
    800: "#44337a",
    900: "#322659",
  },

  pink: {
    50: "#fff5f7",
    100: "#fed7e2",
    200: "#fbb6ce",
    300: "#f687b3",
    400: "#ed64a6",
    500: "#d53f8c",
    600: "#b83280",
    700: "#97266d",
    800: "#702459",
    900: "#521B41",
  },
};
export default colors;

export const colorsList = {
  brandPrimary,
  brandSecondary,
  brandAccent,
  textPrimary,
  textMuted,
  textLight,
  textError,
  textLink,
  textAccent,
  componentPrimary,
  componentSecondary,
  componentAccent,
  componentLightText,
  componentDarkText,
  componentBorder,
  backgroundPrimary,
  backgroundSecondary,
  backgroundAccent,
  backgroundMuted,
  backgroundError,
  backgroundNotification,
  backgroundLight,
  basePrimary,
  baseSecondary,
  baseTertiary,
  baseMuted,
  baseWhite,
  baseError,
  baseLink,
  baseSuccess,
  baseHover,
  baseLinkHover,
  baseInputDisabled,
  baseModalBackground,
  baseErrorHover,
  baseDividers,
  baseBright,
  menuModalBackground,
  alertErrorText,
  alertErrorBackground,
  alertWarningText,
  alertWarningBackground,
  alertInfoText,
  alertInfoBackground,
  alertSuccessText,
  alertSuccessBackground,
  subtleHiover,
};
