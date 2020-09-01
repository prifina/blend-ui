import React, { forwardRef } from "react";

import styled, { css } from "styled-components";

import { layout, space, typography, compose } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import PropTypes from "prop-types";

const systemProps = compose(layout, space, typography);

const nowrap = props => {
  return props.nowrap
    ? {
        whiteSpace: "nowrap",
      }
    : null;
};
const pointer = props => {
  return props.pointer ? { cursor: "pointer" } : null;
};
const hidden = props => {
  return props.hidden ? { visibility: "hidden" } : null;
};

/*
const VisuallyHidden = styled(Box)`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;
*/

const LabelTheme = css`
  font-size: ${props => props.theme.textStyles[props.textStyle].fontSize};
  letter-spacing: ${props =>
    props.theme.textStyles[props.textStyle].letterSpacing};
  display: ${props => props.variation};
  width: 100%;
  margin: 0;
  color: ${props => props.theme.textStyles[props.textStyle].color};
  font-weight: ${props => props.theme.textStyles[props.textStyle].fontWeight};
  line-height: ${props => props.theme.textStyles[props.textStyle].lineHeight};
  ${systemProps};
  ${nowrap}
  ${pointer}
  ${hidden}
`;

const LabelElement = styled("label")`
  ${LabelTheme}
`;

const Label = forwardRef((props, ref) => {
  return <LabelElement {...props} ref={ref} />;
});
Label.propTypes = {
  ...styledProps.space,
  ...styledProps.layout,
  ...styledProps.typography,

  variation: PropTypes.oneOf(["block", "inline", "none"]),
  pointer: PropTypes.bool,
};
Label.defaultProps = {
  textStyle: "body",
};

Label.displayName = "Label";
Label.isLabel = true;

export default Label;
