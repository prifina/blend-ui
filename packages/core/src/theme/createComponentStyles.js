export default (theme = {}) => {
  const { fontSizes, sizes, borders, colors } = theme;

  const baseProps = {
    fontSize: fontSizes["sm"],
    lineHeight: sizes[20],
    border: borders.input.base,
    borderRadius: borders.input.borderRadius,
    paddingLeft: sizes[7],
    paddingRight: sizes[7],
    paddingTop: sizes[13],
    paddingBottom: sizes[13],
  };

  return {
    input: {
      base: baseProps,
    },
    textarea: {
      base: baseProps,
    },
    select: {
      fontSize: fontSizes["sm"],
      lineHeight: sizes[20],
      color: colors.textAccent,
      backgroundColor: "transparent",
      border: borders.select.base,
      borderRadius: borders.select.borderRadius,

      paddingLeft: sizes[12],
      paddingRight: sizes[32],
      paddingTop: sizes[13],
      paddingBottom: sizes[13],
    },
    button: {
      xs: {
        fontSize: sizes.buttonSizes.xs.fontSize,
        paddingLeft: sizes[12],
        paddingRight: sizes[12],
        lineHeight: sizes[32],
        minWidth: sizes[100],
      },
      sm: {
        fontSize: sizes.buttonSizes.sm.fontSize,
        paddingLeft: sizes[18],
        paddingRight: sizes[18],
        lineHeight: sizes[48],
        minWidth: sizes[100],
      },
      md: {
        fontSize: sizes.buttonSizes.md.fontSize,
        paddingLeft: sizes[18],
        paddingRight: sizes[18],
        lineHeight: sizes[48],
        minWidth: sizes[100],
      },
      lg: {
        fontSize: sizes.buttonSizes.lg.fontSize,
        paddingLeft: sizes["8.5"],
        paddingRight: sizes["8.5"],
        lineHeight: sizes[48],
        minWidth: sizes[100],
      },
      xl: {
        fontSize: sizes.buttonSizes.xl.fontSize,
        paddingLeft: sizes[34],
        paddingRight: sizes[34],
        lineHeight: sizes[48],
        minWidth: sizes[100],
      },
      fill: {
        backgroundColor: colors.backgroundAccent,
        color: colors.brandPrimary,
      },
      outline: {
        backgroundColor: "transparent",
        color: colors.brandAccent,
        boxShadow: "inset 0 0 0 2px " + colors.brandAccent,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.textLink,
      },
      file: {
        backgroundColor: "none",
        color: colors.brandAccent,
      },
    },
  };
};
