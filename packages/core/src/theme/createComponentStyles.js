export default (theme = {}) => {
  const { fontSizes, sizeOptions, borders, colors, fontWeights } = theme;

  const baseProps = {
    fontSize: fontSizes["xs"],
    /*lineHeight: sizeOptions[29], */
    lineHeight: sizeOptions[17],
    border: borders.input.base,
    borderRadius: borders.input.borderRadius,
    paddingLeft: sizeOptions[10],
    paddingRight: sizeOptions[10],
    paddingTop: sizeOptions[7],
    paddingBottom: sizeOptions[7],
    backgroundColor: colors.baseWhite,
    color: colors.text.primary,
  };
  /*
  font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
*/
  return {
    input: {
      base: { ...baseProps, height: sizeOptions.componentSizes["base"].height },
    },
    textarea: {
      base: baseProps,
    },
    select: {
      fontSize: fontSizes["sm"],
      lineHeight: sizeOptions[20],
      color: colors.textAccent,
      backgroundColor: "transparent",
      border: borders.select.base,
      borderRadius: borders.select.borderRadius,

      paddingLeft: sizeOptions[12],
      paddingRight: sizeOptions[32],
      paddingTop: sizeOptions[13],
      paddingBottom: sizeOptions[13],
    },
    button: {
      xs: {
        fontSize: sizeOptions.buttonSizes.xs.fontSize,
        paddingLeft: sizeOptions[12],
        paddingRight: sizeOptions[12],
        lineHeight: sizeOptions[32],
        minWidth: sizeOptions[100],
        fontWeight: fontWeights["normal"],
      },
      sm: {
        fontSize: sizeOptions.buttonSizes.sm.fontSize,
        paddingLeft: sizeOptions[22],
        paddingRight: sizeOptions[22],
        lineHeight: sizeOptions[30],
        minWidth: sizeOptions[131],
        fontWeight: fontWeights["bold"],
      },
      md: {
        fontSize: sizeOptions.buttonSizes.md.fontSize,
        paddingLeft: sizeOptions[18],
        paddingRight: sizeOptions[18],
        lineHeight: sizeOptions[48],
        minWidth: sizeOptions[131],
        fontWeight: fontWeights["bold"],
      },
      lg: {
        fontSize: sizeOptions.buttonSizes.lg.fontSize,
        paddingLeft: sizeOptions["8.5"],
        paddingRight: sizeOptions["8.5"],
        lineHeight: sizeOptions[48],
        minWidth: sizeOptions[131],
        fontWeight: fontWeights["bold"],
      },
      xl: {
        fontSize: sizeOptions.buttonSizes.xl.fontSize,
        paddingLeft: sizeOptions[34],
        paddingRight: sizeOptions[34],
        lineHeight: sizeOptions[48],
        minWidth: sizeOptions[131],
        fontWeight: fontWeights["bold"],
      },
      fill: {
        backgroundColor: colors.baseSecondary,
        color: colors.baseWhite,
        border: borders.button.base,
      },
      outline: {
        backgroundColor: colors.baseWhite,
        color: colors.baseSecondary,
        border: borders.button.base,
        //boxShadow: "inset 0 0 0 2px " + colors.brandAccent,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.baseLink,
        textDecoration: "underline",
        border: 0,
        minWidth: 0,
      },
      file: {
        backgroundColor: "none",
        color: colors.brandAccent,
      },
    },
  };
};
