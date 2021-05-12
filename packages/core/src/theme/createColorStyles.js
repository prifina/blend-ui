import { randomAvatarColor } from "./theme";

export default (theme = {}) => {
  const { colors } = theme;

  return {
    button: {
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
      fill: {
        error: {
          color: colors.baseWhite,
          borderColor: colors.baseWhite,
          backgroundColor: colors.baseError,
        },
        secondary: {
          backgroundColor: colors.baseSecondary,
          color: colors.baseWhite,
          borderColor: colors.baseSecondary,
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
