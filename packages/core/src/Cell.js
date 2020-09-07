import React from "react";
import Box from "./Box";
import PropTypes from "prop-types";
import { default as styledProps } from "@styled-system/prop-types";
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];

//const aliases = ["sm", "md", "lg", "xl", "xxl"];

//export const breakpoints = [32, 40, 48, 64, 80].map(n => n + "em");

const JUSTIFY = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];

const Cell = props => {
  const { children, xs, sm, md, lg, xl, justify, ...rest } = props;
  let width = null;
  if (props.width) {
    width = props.width;
  } else {
    width = [];
    BREAKPOINTS.forEach(bp => {
      if (typeof props[bp] !== "undefined") {
        width.push(props[bp] / 12);
      } else {
        width.push(null);
      }
    });
  }
  console.log("WIDTH ", width);
  return (
    <Box {...rest} width={width} justifyContent={justify}>
      {children}
    </Box>
  );
};

Cell.displayName = "Grid";
Cell.defaultProps = {
  justify: "flex-start",
};

Cell.propTypes = {
  xs: PropTypes.oneOf([...new Array(12)].map((_, i) => i + 1)),
  sm: PropTypes.oneOf([...new Array(12)].map((_, i) => i + 1)),
  md: PropTypes.oneOf([...new Array(12)].map((_, i) => i + 1)),
  lg: PropTypes.oneOf([...new Array(12)].map((_, i) => i + 1)),
  xl: PropTypes.oneOf([...new Array(12)].map((_, i) => i + 1)),
  justify: PropTypes.oneOf(JUSTIFY),
  ...styledProps.layout,
  ...styledProps.space,
};
export default Cell;
