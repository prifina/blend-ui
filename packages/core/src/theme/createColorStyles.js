export default (theme = {}) => {
  const { colors } = theme;
  return {
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
