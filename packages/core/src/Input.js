import React, { forwardRef } from "react";

import styled, { css } from "styled-components";
import {
  space,
  layout,
  typography,
  border,
  color,
  compose,
} from "styled-system";
import Text from "./Text";
import Box from "./Box";

import { useTheme } from "./theme/ThemeProvider";

//import PropTypes from "prop-types";

const systemProps = compose(layout, color, space, border, typography);

const inputTheme = css`
  margin: 0; // system props are overriding above values
  ${systemProps}
  appearance: none;
  display: block;
  height: ${props =>
    props.height
      ? props.height
      : props.isIcon
      ? "100%"
      : props.theme.componentStyles[props.as].base.height};
  font-family: inherit;
  font-size: ${props => props.theme.componentStyles[props.as].base.fontSize};
  line-height: ${props =>
    props.theme.componentStyles[props.as].base.lineHeight};
  color: ${props =>
    typeof props.color !== "undefined"
      ? props.color
      : props.theme.componentStyles[props.as].base.color};
  background-color: ${props =>
    props.theme.componentStyles[props.as].base.backgroundColor ||
    "transparent"};
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.theme.componentStyles[props.as].base.border};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.componentStyles[props.as].base.borderRadius};

  padding-left: ${props =>
    props.theme.componentStyles[props.as].base.paddingLeft};
  padding-right: ${props =>
    props.theme.componentStyles[props.as].base.paddingRight};
  padding-top: ${props =>
    props.theme.componentStyles[props.as].base.paddingTop};
  padding-bottom: ${props =>
    props.theme.componentStyles[props.as].base.paddingBottom};
  ::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
  &:disabled {
    background: ${props => props.theme.colors.text.muted};
    border: ${props => (props.isIcon ? 0 : props.theme.borders.input.disabled)};
    pointer-events: none;
  }
  &:invalid {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props => (props.isIcon ? 0 : props.theme.borders.input.error)};
  }
  &:focus,
  &:not([disabled]):hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props => (props.isIcon ? 0 : props.theme.borders.input.active)};
  }
  /*
  &:hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    // border: ${props => props.theme.borders.input.active};
  }
  */
  ::-ms-clear {
    display: none;
  }
`;

const themeColorStyles = props => {
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
const errorStyles = props => {
  return props.error
    ? { border: props.isIcon ? 0 : props.theme.borders.input.error }
    : null;
};
const InputElement = styled.input`
  ${inputTheme}
  ${themeColorStyles}
  ${errorStyles}
`;

const Input = forwardRef(({ errorMsg, promptMsg, ...props }, ref) => {
  //console.log("INPUT  ", props, ref);
  const { colors } = useTheme();
  //console.log("IS ICON ", props.isIcon);
  //const InputRef = ref || React.createRef();
  if (errorMsg && errorMsg.length > 0) {
    return (
      <React.Fragment>
        <InputElement {...props} ref={ref} />
        <Text mt={5} textStyle={"caption2"} color={colors.baseError}>
          {errorMsg}
        </Text>
      </React.Fragment>
    );
  } else if (promptMsg && promptMsg.length > 0) {
    return (
      <Box>
        <InputElement {...props} ref={ref} />
        <Text
          mt={5}
          mb={10}
          textStyle={"caption2"}
          color={colors.baseSecondary}
        >
          {promptMsg}
        </Text>
      </Box>
    );
  } else {
    return <InputElement {...props} ref={ref} />;
  }
});
Input.defaultProps = {
  as: "input",
  type: "text",
  width: "100%",
};

Input.displayName = "Input";
Input.isField = true;

export default Input;
