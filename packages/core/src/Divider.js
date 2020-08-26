import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import PropTypes from "prop-types";

const DividerElement = styled("div")`
  ${space}
  border: 0;
  border-bottom-style: ${props => props.borderStyle || "solid"};
  border-bottom-width: ${props => props.borderWidth || "1px"};
  border-color: ${props => props.borderColor || "black"};
`;

const Divider = ({ as, height, color, style, ...props }) => {
  console.log("SPACE ", space(props));
  const opts = {
    borderWidth: height || null,
    borderStyle: style || null,
    borderColor: color || null,
    ...props,
  };
  return <DividerElement as={as} {...opts} />;
};

Divider.displayName = "Divider";

Divider.defaultProps = {
  as: "hr",
};

Divider.propTypes = {
  ...styledProps.color,
  ...styledProps.space,
  ...styledProps.layout,
  ...styledProps.border,
  as: PropTypes.oneOf(["hr", "div"]),
};

export default Divider;
