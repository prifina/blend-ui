import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";

const customPropsList = { bold: "fontWeight", italic: "fontStyle" };

const customProps = props => {
  //console.log("PROPS CUSTOM ", props);
  let propsList = [];
  Object.keys(props).forEach(p => {
    if (Object.keys(customPropsList).indexOf(p) > -1) {
      let cssProp = {};
      if (p === "bold") {
        cssProp[customPropsList[p]] = props.theme.fontWeights["bold"];
      } else {
        cssProp[customPropsList[p]] = p;
      }
      propsList.push(cssProp);
    }
  });
  return propsList;
};
/*
//https://styled-system.com/how-it-works
const TextElement = styled.div`
  ${textStyle}
  ${typography}
  ${space}
  ${color}
  ${customProps}
  color: ${props => (props.color ? props.color : "currentColor")};
  font-family: ${props => (props.fontFamily ? props.fontFamily : "body")};
`;
*/
/*
//https://styled-components.com/releases
const TextElement = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["color", "fontFamily"].includes(prop),
})`
  ${textStyle}
  ${typography}
  ${space}
  ${color}
  ${customProps}
`;
*/
const color = props => {
  console.log("color PROPS ", props);

  return {
    color: props.color ? props.color : props.theme.colors["textPrimary"],
  };
};
const textStyles = props => {
  return props.textStyle ? props.theme.textStyles[props.textStyle] : null;
};
const colorStyles = props => {
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
// https://styled-system.com/guides/build-a-box

const TextElement = styled.div(
  typography,
  space,
  color,
  customProps,
  textStyles,
  colorStyles,
);

const Text = ({ as, ...props }) => {
  console.log("PROPS ", props);
  //const {colors} = useTheme();
  //console.log(colors);
  /* color: themeGet("palette.primary.main")(props), */
  return <TextElement as={as} {...props} />;
};

Text.displayName = "Text";
Text.defaultProps = {
  as: "div",
};

Text.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
  ...styledProps.color,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
};

export default Text;
