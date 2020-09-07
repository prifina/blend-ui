import React from "react";
import Box from "./Box";
import Flex from "./Flex";
import PropTypes from "prop-types";

const ALIGN_ITEMS = ["flex-start", "center", "flex-end", "stretch", "baseline"];

const JUSTIFY = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];

const ALIGN_CONTENT = [
  "stretch",
  "center",
  "flex-start",
  "flex-end",
  "space-between",
  "space-around",
];

const DIRECTION = ["row", "row-reverse", "column", "column-reverse"];

const Grid = props => {
  const {
    children,
    alignContent,
    alignItems,
    direction,
    justify,
    flexWrap,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      <Flex
        flexWrap={flexWrap}
        width={width}
        height={height}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        alignContent={alignContent}
        alignItems={alignItems}
        justifyContent={justify}
        flexDirection={direction}
      >
        {children}
      </Flex>
    </Box>
  );
};

Grid.defaultProps = {
  alignItems: "stretch",
  justify: "flex-start",
  alignContent: "stretch",
  direction: "row",
  flexWrap: "wrap",
};
Grid.displayName = "Grid";

Grid.propTypes = {
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  alignContent: PropTypes.oneOf(ALIGN_CONTENT),
  justify: PropTypes.oneOf(JUSTIFY),
  direction: PropTypes.oneOf(DIRECTION),
  flexWrap: PropTypes.oneOf(["wrap", "nowrap", "wrap-reverse", "initial"]),
};
export default Grid;
