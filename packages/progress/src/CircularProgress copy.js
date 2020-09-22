import React from "react";
import styled from "styled-components";
//import {Box} from "core";
import PropTypes from "prop-types";
import {
  space,
  border,
  layout,
  flexbox,
  typography,
  position,
  shadow,
} from "styled-system";
import { useTheme } from "@blend-ui/core";

const CircularProgressLabel = styled.div`
  /* */
  position: absolute;
  left: 50%;
  top: 50%;
  line-height: 1;
  transform: translate(-50%, -50%);
  font-size: 0.25em;
  font-variant-numeric: tabular-nums;
`;
CircularProgressLabel.displayName = "CircularProgressLabel";
CircularProgressLabel.propTypes = {
  /** Text/Number on tracker bar */
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
  /* */
  ${space} 
  ${border}
  ${layout}
  ${flexbox}
  ${typography}
  ${position}
  ${shadow}
`;

const CircularProgress = props => {
  const {
    size,
    max = 100,
    min = 0,
    thickness,
    value,
    trackColor,
    color,
    children,
    ...rest
  } = props;

  const theme = useTheme();
  //console.log("PROGRESS ", theme);
  console.log("CP PROPS ", props);
  const _size = size || 90;
  const factor = _size / 90;
  let radius = _size / 2;
  let cx = radius;
  let cy = radius - 4 * factor;
  let offset = 0;
  //let _thickness = Math.max(0.1, thickness);
  //_thickness = Math.min(1, _thickness);
  //_thickness = 4*factor;
  let _thickness = thickness * factor;
  let _padding = _thickness / 2;

  //let diameter = (radius - _thickness - _padding - 1) * 2;
  //let diameter = (radius - 8 - _thickness - _padding) * 2;
  let circumference = _size * Math.PI;
  console.log("CIRC ", circumference);

  let strokeDasharray = Math.round(circumference * 1000) / 1000;

  //let viewBox = diameter / (1 - _thickness / 2);
  let viewBox = 90 * factor;
  //min-x, min-y, width and height.

  //let viewBoxAttr = `${viewBox / 2} ${viewBox / 2} ${viewBox} ${viewBox}`;
  let viewBoxAttr = `0 0 ${viewBox} ${viewBox}`;
  //let strokeWidth = (_thickness / 2) * viewBox;
  let strokeWidth = _thickness;

  let progress = 1 - (value - min) / (max - min);

  //let strokeDashoffset = progress * circumference;
  let strokeDashoffset = 180;
  //let rotateCircle = `rotate(-90 ${viewBox / 2} ${viewBox / 2})`;
  let rotateCircle = `rotate(-90 ${cx} ${cy})`;
  //console.log('ROTATE ',rotateCircle);
  console.log("PROGRESS ", progress, strokeDashoffset);
  //console.log(viewBoxAttr);

  const _color = color || theme.colors.baseSecondary;

  const rootProps = {
    size: "1em",
    fontSize: _size + "px",
    display: "inline-block",
    position: "relative",
    veriticalAlign: "middle",
    role: "progressbar",
    "aria-valuemin": min,
    "aria-valuemax": max,
    /* "aria-valuenow": isIndeterminate ? null : value, */
  };
  //style={{ boxShadow: "0px 4px 8px rgba(91, 92, 91, 0.2)" }}
  /* offset-x | offset-y | blur-radius | color */
  //box-shadow: 10px 5px 5px black;

  //flood-opacity="0.2"
  //flood-color="#5B5C5B"
  //flood-opacity="0.8"
  //floodColor="rgba(91, 92, 91, 0.2)"
  console.log("COLOR ", _color);
  /*
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="45" cy="41" r="37" fill="#F5F8F7"/>
</g>
<circle cx="45" cy="41" r="35" fill="#00847A" fill-opacity="0.1"/>
<circle cx="45" cy="41" r="31" fill="#F5F8F7"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.356863 0 0 0 0 0.360784 0 0 0 0 0.356863 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

*/
  const radiusOffset = 4 * factor + 4 * factor;
  return (
    <Wrapper {...rootProps} {...rest}>
      <StyledSpinner
        viewBox={viewBoxAttr}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={_size}
        height={_size}
      >
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.356863 0 0 0 0 0.360784 0 0 0 0 0.356863 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
        <g filter="url(#filter0_d)">
          <circle
            className="circle"
            cx={cx}
            cy={cy}
            r={radius - radiusOffset} // 45->37  offset + blur
            fill={theme.colors.baseWhite}
          />
        </g>

        <circle
          className="tracking"
          cx={cx}
          cy={cy}
          r={radius - radiusOffset - _padding}
          fill="transparent"
          stroke="currentcolor"
          color={theme.colors.baseTertiary}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={offset}
        />

        <circle
          className="progress"
          cx={cx}
          cy={cy}
          r={radius - radiusOffset - _padding}
          fill="transparent"
          stroke="currentcolor"
          color={_color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform={rotateCircle}
          strokeLinecap="round"
        />
      </StyledSpinner>
      {children}
    </Wrapper>
  );
};
/*
 <StyledSpinner viewBox={viewBoxAttr}>
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="1.4"
              stdDeviation="1.8"
              floodColor="#5B5C5B"
              floodOpacity="0.8"
            />
          </filter>
        </defs>

        <circle
          className="circle"
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={radius - _padding - 1}
          fill={theme.colors.baseWhite}
          filter="url(#shadow)"
        />
        <circle
          className="tracking"
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={radius - _thickness - _padding - 1}
          fill="transparent"
          stroke="currentcolor"
          color={theme.colors.baseTertiary}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={offset}
        />

        <circle
          className="progress"
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={radius - _thickness - _padding - 1}
          fill="transparent"
          stroke="currentcolor"
          color={_color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform={rotateCircle}
          strokeLinecap="round"
        />
      </StyledSpinner>
 <circle
          className="tracking"
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={radius - _thickness}
          fill="transparent"
          stroke="currentcolor"
          color={"rgba(0, 132, 122, 0.1)"}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={offset}
        />

        <circle
          className="progress"
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={radius - _thickness}
          fill="transparent"
          stroke="currentcolor"
          color={"#00847A"}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform={rotateCircle}
          strokeLinecap="round"
        />

<circle
          className="tracking"
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={radius - _padding}
          fill="transparent"
          stroke="currentcolor"
          color={"green"}
          strokeWidth={2}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={0}
          style={{ filter: "url(#shadow2);" }}
        />
<circle
className="tracking"
cx={viewBox / 2}
cy={viewBox / 2}
r={radius - 2}
fill="transparent"
stroke="currentcolor"
color={trackColor}
strokeWidth={strokeWidth}
strokeDasharray={strokeDasharray}
strokeDashoffset={offset}
/>
<circle
className="progress"
cx={viewBox / 2}
cy={viewBox / 2}
r={radius - 2}
fill="transparent"
stroke="currentcolor"
color={color}
strokeWidth={strokeWidth}
strokeDasharray={strokeDasharray}
strokeDashoffset={strokeDashoffset}
transform={rotateCircle}
strokeLinecap="round"
/>
*/
const StyledSpinner = styled.svg`
  /*  */
`;
CircularProgress.defaultProps = {
  size: 90,
  thickness: 4,
};

/*
 size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.keys(circleSizes)),
  ]),
  */
CircularProgress.propTypes = {
  /** Circle thickness, <=1 */
  thickness: PropTypes.number,
  /** Circle width&height */
  size: PropTypes.number,
  /** Tracker color */
  color: PropTypes.string,

  /** progress % */
  value: function (props, propName, displayName) {
    if (props[propName]) {
      let value = props[propName];
      if (typeof value === "number") {
        return value >= 0 && value <= 100
          ? null
          : new Error(propName + " is not within 0 to 100");
      }
    } else {
      return new Error(propName + " is required");
    }
  },
};
CircularProgress.displayName = "CircularProgress";
export { CircularProgress, CircularProgressLabel };
