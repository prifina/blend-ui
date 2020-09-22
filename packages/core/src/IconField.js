import React from "react";
import Box from "./Box";

import styled from "styled-components";
import { space } from "styled-system";
//import PropTypes from "prop-types";
import { useTheme } from "./theme/ThemeProvider";

const StyledBox = styled(Box)`
  ${space}
  display: flex;
  height: ${props =>
    props.height
      ? props.height
      : props.theme.componentStyles.input.base.height};
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.text.muted
      : props.theme.componentStyles.input.base.backgroundColor ||
        "transparent"};
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.error
      ? props.theme.borders.input.error
      : props.theme.componentStyles.input.base.border};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.componentStyles.input.base.borderRadius};

  &:focus,
  &:not([disabled]):hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props => props.theme.borders.input.active};
  }
  /*
  &:disabled {
    background: ${props => props.theme.colors.text.muted};
    border: ${props => props.theme.borders.input.disabled};
    pointer-events: none;
  }
  
  &:invalid {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: props.theme.borders.input.error};
  }
  */
`;

const IconField = props => {
  //console.log("ICON FIELD ", props);
  const isIcon = item => item.type.isIcon || item.type.isIconButton;
  const theme = useTheme();
  //console.log("ICON FIELD ", theme);
  //let icons = 0;
  let leftIconExists = false;
  let rightIconExists = false;
  const children = React.Children.toArray(props.children).filter((child, i) => {
    //icons += isIcon(child) ? 1 : 0;
    if (isIcon(child) && i === 0) {
      leftIconExists = true;
    }
    if (isIcon(child) && i > 0) {
      rightIconExists = true;
    }
    return child.type.isField || isIcon(child);
  });
  //console.log("ICONS ", icons);
  let inputError = null;
  const styledChildren = children.map((child, i) => {
    if (isIcon(child)) {
      //console.log("ICON FIELD ", props);
      return React.cloneElement(child, {
        theme: theme,
        style: {
          ...child.props.style,
          flex: "none",
          alignSelf: "center",
          pointerEvents: child.type.isIcon ? "none" : "auto",
          marginLeft: i === 0 ? theme.sizeOptions[10] : 0,
          marginRight: i > 0 ? theme.sizeOptions[10] : 0,
          position: "relative",
        },
      });
    } else {
      //console.log("INPUT ", child);
      inputError = child.props.error || null;
    }
    return React.cloneElement(child, {
      borders: 0,
      isIcon: true,
      disabled: props.disabled || null,
      paddingLeft: leftIconExists
        ? theme.sizeOptions[10]
        : theme.sizeOptions[10],
      paddingRight: rightIconExists
        ? theme.sizeOptions[10]
        : theme.sizeOptions[10],
    });
  });
  //console.log("ERROR ", inputError);
  return (
    <StyledBox disabled={props.disabled || null} error={inputError}>
      {styledChildren}
    </StyledBox>
  );
};

export default IconField;
