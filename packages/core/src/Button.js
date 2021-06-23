import React, { forwardRef } from "react";

import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { default as styledProps } from "@styled-system/prop-types";
import {  space, typography } from "styled-system";
import Box from "./Box";
import { useId } from "@reach/auto-id";

const Flex = styled(Box)`
  display: flex;
`;

const buttonVariations = ["fill", "outline", "link", "file"];

const buttonVariation = props => {
  //console.log("VARIATION ", props);
  let buttonProps = Object.assign(
    {},
    props.theme.componentStyles.button[props.variation],
  );
  let hoverVariations = null;
  if (props.variation === "link"){
    hoverVariations = css`
      &:hover {
        text-decoration: underline;
        color: ${props => props.theme.colors.baseHover}!important;
        background-color: transparent !important;
        border: 0 !important;
      }
    `;
    }else if (props.colorStyle === "error" && props.variation === "fill" ){
      hoverVariations = css`
      &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.baseWhite}!important;
        background-color: ${props => props.theme.colors.baseErrorHover} !important;
        border: '${props => props.theme.borders.button.hoverError}';
      }
    `;

    }else if (props.colorStyle === "error" && props.variation === "outline" ){
      hoverVariations = css`
      &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.baseErrorHover}!important;
        border: '${props => props.theme.borders.button.hoverError}';
      }
    `;

    }
    
  //console.log(hoverVariations);
  return [buttonProps, hoverVariations];
};

const themeColorStyles = props => {
  //return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
  let buttonProps = null;
  let hoverVariations = null;
  if (props.colorStyle) {
    if (props.variation === "outline") {
      buttonProps = props.theme.colorStyles.button.outline[props.colorStyle];
    } else if (props.variation === "fill") {
      buttonProps = props.theme.colorStyles.button.fill[props.colorStyle];
    }
    else if (props.variation === "link") {
      buttonProps = props.theme.colorStyles.button.link[props.colorStyle];
    }
  }
  return [buttonProps, hoverVariations];
};

const buttonTheme = css`
  display: inline-block; 
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  height: auto;
  width: ${props => props.width || "auto"};
  min-width: ${props =>
    props.minWidth || props.theme.componentStyles.button[props.size].minWidth};
  line-height: ${props =>
    props.lineHeight ||
    props.theme.componentStyles.button[props.size].lineHeight};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.borders.button.borderRadius};
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.theme.componentStyles.button[props.variation].border};

  font-size: ${props =>
    props.fontSize || props.theme.componentStyles.button[props.size].fontSize};
  font-weight: ${props =>
    props.fontWeight ||
    props.theme.componentStyles.button[props.size].fontWeight};
  padding: 0;
  padding-top: ${props =>
    props.paddingTop ||
    props.theme.componentStyles.button[props.size].paddingTop};
    padding-bottom: ${props =>
      props.paddingTop ||
      props.theme.componentStyles.button[props.size].paddingBottom};
  padding-left: ${props =>
    props.paddingLeft ||
    props.theme.componentStyles.button[props.size].paddingLeft};
  padding-right: ${props =>
    props.paddingRight ||
    props.theme.componentStyles.button[props.size].paddingRight};
  &:not([disabled]):hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props => props.colorStyle ==='error' ? props.theme.borders.button.hoverError : props.theme.borders.button.hover };
    color: ${props =>
      props.variation === "fill"
        ? props.theme.colors.baseWhite
        : props.theme.colors.baseHover};
    background-color: ${props =>
      props.variation === "outline"
        ? props.theme.colors.baseWhite
        : props.theme.colors.baseHover};
  }
  &:disabled {
    background: ${props =>
      props.variation === "link"
        ? "transparent"
        : props.theme.colors.text.muted};
    color: ${props =>
      props.variation === "link"
        ? props.theme.colors.baseMuted
        : props.theme.colors.baseWhite};
    border: ${props =>
      props.variation === "link" ? 0 : props.theme.borders.button.disabled};
    pointer-events: none;
    cursor: not-allowed;
    /*opacity: 0.25;*/
  }
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
/*
<Flex>
              <input
                disabled={importDisabled}
                style={{ display: "none" }}
                type="file"
                accept=".json, .graphql"
                id="file_upload"
                name="file_upload"
                onChange={(e) => _importFile(e)}
              />
              <Button
                disabled={importDisabled}
                variation={"file"}
                input="file_upload"
              >
                {I18n.get("Import Data Model")}
              </Button>
            </Flex>
            
*/

const FileInputElement = styled.input.attrs(props => ({
  type: "file",
}))`
  display: none;
`;

const ButtonElement = styled.button`
  /*  */
  ${buttonTheme}
  ${buttonVariation}
    ${space}
    ${typography}
    ${themeColorStyles}
`;

const Button = forwardRef((props, ref) => {
  //console.log("BUTTON ", props);
  const _id = useId(props.id);
  if (props.variation === "file" && props.onChange) {
    const inputID = `blend-file-button-${_id}`;

    const { id, name, accept, onChange, disabled, ...rest } = props;
    return (
      <Flex>
        <FileInputElement
          id={inputID}
          name={inputID}
          accept={accept}
          disabled={disabled}
          onChange={onChange}
        />
        <ButtonElement
          as={"label"}
          htmlFor={inputID}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
      </Flex>
    );
  } else {
    return <ButtonElement {...props} ref={ref} />;
  }
});

Button.propTypes = {
  /** Fixed width&height */
  size: PropTypes.oneOf(["xs","sm", "md", "lg","xl"]),
  /** Styled layout props */
  ...styledProps.layout,
  /** Styled space props */
  ...styledProps.space,

  /** Variations */
  variation: PropTypes.oneOf(buttonVariations),
  /** Button is disabled */
  disabled: PropTypes.bool,
  /** Button is click event */
  onClick: PropTypes.func,
  /** File upload button, htmlFor input element */
  //input: PropTypes.string,
  /** Input file selected event */
  onChange: PropTypes.func,
  colorStyle: PropTypes.string,
};

Button.defaultProps = {
  variation: "fill",
  size: "md",
};

Button.displayName = "Button";

export default Button;
