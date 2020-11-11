export default (theme = {}) => {
  const { colors } = theme;
  return {
    button: {
      outline: {
        error: {
          color: colors.baseError,
          borderColor: colors.baseError,
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
