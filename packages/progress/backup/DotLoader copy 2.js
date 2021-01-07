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
/*
const dots = keyframes`
{
  0% {
    background-color: #c3c2c2;
  }
  50% {
    background-color: #c3c2c2;
  }
  100% {
    background-color: #00847A;
  }
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
    animation-delay: 0.75s;
  }

  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`;

const Dot = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #00847a;
  
  float: left;
  z-index: 2;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
  animation: ${dots} 3s linear infinite;
`;
*/
/* background-color: ${props => props.color}; */

/* #00847A;
#C3C2C2
*/
const dots = keyframes`
{
  0% {
    background-color: #00847A;
  }
  50% {
    background-color: #00847A;
  }
  75% {
    background-color: #00847A;
  }
  100% {
    background-color: #C9E4E0;
  }
}
`;

const DotsContainer = styled.div`
  background: #fff;
  position: relative;
  height: 200px;
  margin: 0 10px 0 0;
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    animation: ${dots} 8s linear;
  }
  div:nth-child(1) {
    animation-delay: 2s;
  }

  div:nth-child(2) {
    animation-delay: 4s;
  }
  div:nth-child(3) {
    animation-delay: 6s;
  }
`;

const Dot = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c9e4e0;

  float: left;
  z-index: 2;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;
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
