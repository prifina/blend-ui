/* eslint-disable import/no-anonymous-default-export */

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
        backgroundColor: colors.background.accent,
      },
    ],
  };
};
