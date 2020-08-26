import React, { forwardRef } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from "styled-system";

const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  /*colorStyles,*/
);
const themeColorStyles = props => {
  //console.log("custom ", props);
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
/*
.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
      !["color", "m", "bg", "size", "width", "height", "flexDirection", "mb"].includes(prop),
})
*/

const BoxElement = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    //console.log("BOX PROP ", prop);
    let propsList = Object.keys(systemProps);
    propsList.push("colorStyle");

    return !propsList.includes(prop);
  },
})`
  ${systemProps}
  ${themeColorStyles}
`;

// https://reactjs.org/docs/forwarding-refs.html
const Box = forwardRef((props, ref) => {
  return <BoxElement {...props} ref={ref} />;
});

Box.displayName = "Box";

Box.propTypes = {
  colorStyle: PropTypes.string,
};

export default Box;
