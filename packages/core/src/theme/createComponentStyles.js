import { css } from "styled-components";

export default (theme = {}) => {
  const { fontSizes, sizeOptions, borders, colors, fontWeights } = theme;

  const scrollBar = css`
    scrollbar-width: 4px;
    scrollbar-color: ${colors.baseSecondary || "#00847A"}
      ${colors.baseTertiary || "rgba(0, 132, 122, 0.1)"};
    overflow-y: auto; // or scroll
    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    ::-webkit-scrollbar:vertical {
      width: 4px;
      height: 77px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${colors.baseTertiary || "rgba(0, 132, 122, 0.1)"};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      height: 77px;
      background-color: ${colors.baseSecondary || "#00847A"};
    }
    ::-webkit-scrollbar-thumb:vertical {
      height: 77px;
    }
  `;

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


const error = css`
  background: #fed7d7;
  border-color: #f40431;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  color: #f40431;
`;
*/
  const alertStyles = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "10px",
  };
  return {
    alert: {
      error: {
        backgroundColor: colors.alert.error.backgroundColor,
        color: colors.alert.error.color,
        ...alertStyles,
      },
      warning: {
        backgroundColor: colors.alert.warning.backgroundColor,
        color: colors.alert.warning.color,
        ...alertStyles,
      },
      info: {
        backgroundColor: colors.alert.info.backgroundColor,
        color: colors.alert.info.color,
        ...alertStyles,
      },
      success: {
        backgroundColor: colors.alert.success.backgroundColor,
        color: colors.alert.success.color,
        ...alertStyles,
      },
    },
    scrollBar: scrollBar,
    input: {
      base: { ...baseProps, height: sizeOptions.componentSizes["base"].height },
    },
    textarea: {
      base: baseProps,
    },
    select: {
      md: {
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
      sm: {
        fontSize: fontSizes["sm"],
        lineHeight: sizeOptions[18],
        borderRadius: borders.select.borderRadius,
        height: sizeOptions[25],
        paddingLeft: sizeOptions[4],
      },
      xs: {
        fontSize: fontSizes["sm"],
        lineHeight: sizeOptions[18],
        borderRadius: borders.select.borderRadius,
        height: sizeOptions[18],
        paddingLeft: sizeOptions[4],
      },
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
        padding: 0,
        margin: 0,
        lineHeight: "normal",
      },
      file: {
        backgroundColor: "none",
        color: colors.brandAccent,
      },
    },
  };
};
