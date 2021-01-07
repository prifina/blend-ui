import React from "react";
import styled, { keyframes } from "styled-components";

import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";

import { useTheme } from "@blend-ui/core";

//${themeGet('letterSpacings.caps')};
/* background-color: :${props => props.theme.colors.baseSecondary}; 
background-color: ${props => props.theme.colors.baseDividers};
*/
/*
const dots = keyframes`
{
  10% {
   background-color: :${themeGet("colors.baseSecondary")}; 
  }
  0%, 20%,100% {
    background-color: ${themeGet("colors.baseDividers")};
  }
}
`;

#00847A;
*/
const dots = colors => keyframes`
{
  10% {
   background-color: ${colors.baseSecondary}; 
  }
  0%, 20%,100% {
    background-color: ${colors.baseDividers};
  }
}
`;

const DotsContainer = styled.div`
  background: #fff;
  position: relative;
  height: 136px;
  width: 136px;
  margin: 0 10px 0 0;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 13px solid ${props => props.theme.colors.baseSecondary};
  border-radius: 50%;

  div {
    animation: ${props => dots(props.theme.colors)} 4s linear infinite;
  }
  div:nth-child(1) {
    animation-delay: 1s;
  }

  div:nth-child(2) {
    animation-delay: 2s;
  }
  div:nth-child(3) {
    animation-delay: 3s;
  }
`;

const Dot = styled.div`
  position: relative;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.baseDividers};

  float: left;
  z-index: 2;
  margin-right: 9px;
  &:last-of-type {
    margin-right: 0;
  }
`;
/**
 * Dot Loader, uses css animation
 */
const DotLoader = props => {
  const theme = useTheme();
  console.log(theme.colors);
  return (
    <DotsContainer theme={theme}>
      <Dot theme={theme} />
      <Dot theme={theme} />
      <Dot theme={theme} />
    </DotsContainer>
  );
};

// TBD preconfigured sizes would be good option...

DotLoader.displayName = "DotLoader";
export default DotLoader;
