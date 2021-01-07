import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
/*
body {
  background-color: #47d1da;}
p {
  color: white;
  font: 300 4em/150% Impact;
  text-align: center;}


.loading:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;}

@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}}  
*/

const dot1 = keyframes`
0% {
  background-color: #c3c2c2;
  } 
10%,20%,80% {
  background-color: #00847A;
}
100% {
  background-color: #00847A;
  } 
`;

const dot2 = keyframes`
0%,10%,20% {
  background-color: #c3c2c2;
  } 
60%,80% {
  background-color: #00847A;
  }
  100% {
  background-color: #00847A;
  } 
`;

const dot3 = keyframes`
0%,10%,20%,60%,80% {
  background-color: #c3c2c2;
  } 

100% {
  background-color: #00847A;
  } 
`;

const DotsContainer = styled.div`
  background: #fff;
  position: relative;
  height: 200px;
  margin: 0 10px 0 0;
  text-align: left;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div:nth-child(1) {
    animation: ${dot1} 5s infinite;
  }

  div:nth-child(2) {
    animation: ${dot2} 5s infinite;
  }

  div:nth-child(3) {
    animation: ${dot3} 3s infinite;
  }
`;

const Dot = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c3c2c2;
  /*display: inline-block; */
  float: left;
  z-index: 2;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;

/* background-color: ${props => props.color}; */

/* #00847A;
#C3C2C2
*/

/**
 * Dot Loader, uses css animation
 */
const DotLoader = props => {
  return (
    <DotsContainer>
      <Dot />
      <Dot />
      <Dot />
    </DotsContainer>
  );
};

DotLoader.displayName = "DotLoader";
export default DotLoader;
