import React, { forwardRef, createContext, useContext } from "react";
import Box from "./Box";
import Text from "./Text";

import Input from "./Input";
import { BlendIcon } from "@blend-ui/icons";

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
      : props.errorinput
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

const InputContext = createContext();
const useInputContext = () => useContext(InputContext);

const IconField = ({ children, disabled, ...props }) => {
  //console.log("ICON FIELD ", props);
  const isIcon = item => item.type.isIcon || item.type.isIconButton;
  const { colors } = useTheme();
  //console.log("ICON FIELD ", theme);
  //let icons = 0;
  let leftIconExists = false;
  let rightIconExists = false;
  let inputError = false;
  let errorMsg = "";
  let promptMsg = "";
  React.Children.toArray(children).map((child, i) => {
    //icons += isIcon(child) ? 1 : 0;
    if (isIcon(child) && i === 0) {
      leftIconExists = true;
    }
    if (isIcon(child) && i > 0) {
      rightIconExists = true;
    }
    if (!isIcon(child) && !inputError) {
      inputError = child.props.error || false;
    }
    if (!isIcon(child) && child.props.errorMsg) {
      errorMsg = child.props.errorMsg;
    }
    if (!isIcon(child) && child.props.promptMsg) {
      promptMsg = child.props.promptMsg;
    }
  });

  //console.log("INPUT ERROR ", inputError);

  return (
    <InputContext.Provider
      value={{ leftIconExists, rightIconExists, disabled, inputError }}
    >
      <StyledBox
        disabled={disabled || null}
        errorinput={inputError ? 1 : undefined}
      >
        {children}
      </StyledBox>
      {errorMsg !== "" && inputError && (
        <Box mt={0} mb={10}>
          <Text textStyle={"caption2"} color={colors.baseError}>
            {errorMsg}
          </Text>
        </Box>
      )}
      {promptMsg !== "" && !inputError && (
        <Box mt={0} mb={10}>
          <Text textStyle={"caption2"} color={colors.baseSecondary}>
            {promptMsg}
          </Text>
        </Box>
      )}
    </InputContext.Provider>
  );
};

const InputField = forwardRef(
  ({ children, errorMsg, promptMsg, ...props }, ref) => {
    const { leftIconExists, rightIconExists, disabled } = useInputContext();
    const theme = useTheme();
    return (
      <Input
        ref={ref}
        isIcon={true}
        borders={0}
        disabled={disabled || null}
        {...props}
        paddingLeft={
          leftIconExists ? theme.sizeOptions[10] : theme.sizeOptions[10]
        }
        paddingRight={
          rightIconExists ? theme.sizeOptions[10] : theme.sizeOptions[10]
        }
      />
    );
  },
);
/*
const InputField = styled(props => <Input {...props} />)`
borders: 0,
isIcon: true,
disabled: {$props=>props.disabled || null},
paddingLeft: {$props=>props.leftIconExists
        ? props.theme.sizeOptions[10]
        : props.theme.sizeOptions[10]},
paddingRight: {$props=>props.rightIconExists
        ? props.theme.sizeOptions[10]
        : props.theme.sizeOptions[10]},
`;
*/

const LeftIcon = styled(props => {
  const { disabled, inputError } = useInputContext();
  const theme = useTheme();
  //const { color, ...rest } = props;
  //color={disabled ? theme.colors.baseMuted : color}

  return (
    <BlendIcon
      {...props}
      fill={disabled ? theme.colors.baseMuted : "transparent"}
      color={
        inputError
          ? theme.colors.baseError
          : props.color || theme.colors.baseSecondary
      }
      theme={theme}
      style={{ marginLeft: theme.sizeOptions[10] }}
    />
  );
})`
  flex: none;
  align-self: center;
  pointer-events: none;
  position: relative;
`;

const RightIcon = styled(props => {
  const { disabled, inputError } = useInputContext();
  const theme = useTheme();

  return (
    <BlendIcon
      {...props}
      fill={disabled ? theme.colors.baseMuted : "transparent"}
      color={
        inputError
          ? theme.colors.baseError
          : props.color || theme.colors.baseSecondary
      }
      theme={theme}
      style={{ marginRight: theme.sizeOptions[10] }}
    />
  );
})`
  flex: none;
  align-self: center;
  pointer-events: none;
  position: relative;
`;

InputField.displayName = "InputField";
LeftIcon.displayName = "LeftInputIcon";
RightIcon.displayName = "RightInputIcon";
LeftIcon.isIcon = true;
RightIcon.isIcon = true;

IconField.InputField = InputField;
IconField.LeftIcon = LeftIcon;
IconField.RightIcon = RightIcon;

export default IconField;

/*
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
      console.log("ICON FIELD ", props);
      return React.cloneElement(child, {
        onClick: () => {
          //return child.props.onClick || null;
          console.log("CLICK ICON");
        },
        theme: theme,
        style: {
          ...child.props.style,
          zIndex: 2,
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
      onClick: () => {
        //return child.props.onClick || null;
        console.log("CLICK ");
      },
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
*/

//export default IconField;
