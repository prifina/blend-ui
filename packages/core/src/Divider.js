import React from "react";
import styled, { css } from "styled-components";
import { space } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import PropTypes from "prop-types";

const normalDivider = css`
  border-bottom-style: ${props => props.borderStyle || "solid"};
  border-bottom-width: ${props => props.borderWidth || "1px"};
  border-color: ${props => props.borderColor || props.theme.colors.baseMuted};
`;
const textInDivider = css`
  display: flex;
  align-items: center;
  text-align: center;
  ::before,
  ::after {
    content: "";
    flex: 1;
    border-bottom-style: ${props => props.borderStyle || "solid"};
    border-bottom-width: ${props => props.borderWidth || "1px"};
    border-color: ${props => props.borderColor || props.theme.colors.baseMuted};
  }
  ::before {
    margin-right: 1.25em;
  }
  ::after {
    margin-left: 1.25em;
  }
`;

/*
const DividerElement = styled("div")`
  ${space}
  border: 0;
  border-bottom-style: ${props => props.borderStyle || "solid"};
  border-bottom-width: ${props => props.borderWidth || "1px"};
  border-color: ${props => props.borderColor || props.theme.colors.baseMuted};
`;
*/
const DividerElement = styled("div")`
  ${space}
  border: 0;
  ${props => (props.children ? textInDivider : normalDivider)}
`;
const Divider = ({ as, height, color, style, ...props }) => {
  //console.log("DIV ", props);
  const opts = {
    borderWidth: height || null,
    borderStyle: style || null,
    borderColor: color || null,
    ...props,
  };
  let dividerType = as;
  if (props.children) {
    dividerType = "div";
  }
  return <DividerElement as={dividerType} {...opts} />;
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
