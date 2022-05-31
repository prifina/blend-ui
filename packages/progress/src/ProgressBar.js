import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const ProgressLabel = styled.div`
  /* */
  font-size: 0.75em;
  font-variant-numeric: tabular-nums;
`;
ProgressLabel.displayName = "ProgressLabel";
ProgressLabel.propTypes = {
  /** Text/Number on tracker bar */
  children: PropTypes.node.isRequired,
};
const Wrapper = styled.div`
  background-color: lightgrey;
  border-radius: 10px;
  height: ${props => props.height};
  font-size: ${props => props.height};
  line-height: ${props => props.height}; // vertical center
  width: 100%;
  /*box-shadox: inset 0 0 5px #000;*/
`;

const ProgressBarWrapper = props => {
  //console.log('WRAPPER ',props);
  const { height, children } = props;
  /*
  const _wrapper = styled.div`
    background-color: lightgrey;
    border-radius: 10px;
    height: ${height};
    font-size: ${height};
    line-height: ${height}; // vertical center
    width: 100%;
    
  `;
  */
  return <Wrapper height={height}>{children}</Wrapper>;
};
const fill = keyframes`
  0% {width: 0%}
  100% {width: 100%} 
`;

const _ProgressBar = styled.div`
  /*background: lightblue; */
  height: 100%;
  width: ${props => props.percentage}%;
  border-radius: 6px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  /*
  animation: ${fill} 5s linear 20; //will animate 20 times
  */
`;

const progressbarSizes = {
  lg: "1rem",
  md: "0.75rem",
  sm: "0.5rem",
};

/**
 * Horizontal bar indicating progress %
 */
const ProgressBar = props => {
  const { height } = props;
  const _height = progressbarSizes[height] || height;

  return (
    <ProgressBarWrapper height={_height}>
      <_ProgressBar {...props} />
    </ProgressBarWrapper>
  );
};
ProgressBar.defaultProps = {
  height: "md",
  color: "red",
};

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = {
  /** Bar tracker color */
  color: PropTypes.string,
  /** Bar height */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.keys(progressbarSizes)),
  ]),

  /** progress%, 0-100 */
  percentage: function (props, propName, displayName) {
    if (props[propName]) {
      let value = props[propName];
      if (typeof value === "number") {
        return value >= 0 && value <= 100
          ? null
          : new Error(propName + " in ProgressBar is not within 0 to 100");
      }
    } else {
      return new Error(propName + " in ProgressBar is required");
    }
  },
};
export { ProgressBar, ProgressLabel };
