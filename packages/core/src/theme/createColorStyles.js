/* eslint-disable import/no-anonymous-default-export */
import { randomAvatarColor } from "./theme";

export default (theme = {}) => {
  const { colors } = theme;

  return {
    button: {
      fill: {
        error: {
          backgroundColor: colors.baseError,
          color: colors.baseWhite,
          borderColor: colors.baseWhite,
        },
        secondary: {
          backgroundColor: colors.baseSecondary,
          color: colors.baseWhite,
          borderColor: colors.baseSecondary,
        },
  
      },
      outline: {
        error: {
          color: colors.baseError,
          borderColor: colors.baseError,
        },
        secondary: {
          color: colors.baseSecondary,
          borderColor: colors.baseSecondary,
        },
      },
      link: {
        error: {
          color: colors.baseError,
        },
        secondary: {
          color: colors.baseSecondary,
        },
      },
    },
    text: {
      error: {
        color: colors.baseError,
      },
    },
    error: {
      color: colors["textError"],
      backgroundColor: colors["backgroundError"],
    },

    avatar: [
      {
        color: colors.text.light,
        // backgroundColor: colors.background.accent,
        backgroundColor: randomAvatarColor,
      },
    ],
  };
};

const ThemeProvider = ({ theme = {}, mobileApp = false, ...props }) => {
  //console.log("THEME PROVIDER ", theme, defaultTheme);
  //console.log(baseStyles);
  const mergedTheme = { ...defaultTheme, ...theme, mobile: mobileApp };
  return (
    <StyledThemeProvider theme={mergedTheme}>
      <Base {...props} />
    </StyledThemeProvider>
  );
};
