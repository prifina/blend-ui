import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    space, 
    border, 
    layout, 
    flexbox, 
    typography, 
    position, 
    shadow,
    fontFamily,
} from "styled-system";
import ProgressTimer from 'react-progress-timer';
import { useTheme } from "@blend-ui/core";


const theme = useTheme();
const backgroundColor = theme.colors.baseTertiary //backgroundColor = "rgba(0, 132, 122, 0.1)";
const barHeight = "4px";
const barwidth = "400px";

const Wrapper = styled.div`
  /* Using styled-system */
  ${space} 
  ${border}
  ${layout}
  ${flexbox}
  ${typography}
  ${position}
  ${shadow}
`;

const ProgressContainer = styled.div`
  progress {
    margin-right: 8px; 
    margin-left: 8px;

  }
  
  progress[value]{
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;

  }

  progress[value]:: -webkit-progress-bar {
      height: ${props => props.height};
      border-radius: 20px;
      background-color: ${backgroundColor};
  }

  progress[value]:: -webkit-progress-value {
    height: 15 px;
    border-radius: 20px;
    background-color: ${props => props.color};
}
  `;



const ProgressBarIndicator = props => {
  const{
    height,
    width,
    max = 100,
    min = 0,
    value,
    color,
    children,
    ...rest

  } = props;

  const _color = color || theme.colors.baseSecondary;  //_color = color || "#00847A";
 

  let percent = (value /max) * 100;

  const rootProps = {
    size: "1em",
    fontFamily: "Montserrat, sans-serif",
    fontSize: 10 + "px",
    display: "inline-block",
    position: "relative",
    veriticalAlign: "middle",
    role: "progressbar",
  };

  return (
    <Wrapper {...rootProps} {...rest}> 
      <ProgressContainer color={_color} width={width} height ={height}>
        {/*<span float = "right" text-align="center">{percent}%</span>*/}
         <progress value = {value} max = {max} min = {min}/>
        {/*<ProgressTimer percentage = {percent} format = "{value} {unit}" completedText = " " initialText = {initialText} >  </ProgressTimer>*/}
      </ProgressContainer>
    </Wrapper>
    
  )

};


ProgressBarIndicator.propTypes ={
  value:PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string, 
  width: PropTypes.string, 
  height: PropTypes.string,
}


ProgressBarIndicator.defaultProps = {
  max: 100,
  width: barwidth,
  height: barHeight,
  color: theme.colors.baseSecondary,
  value: function (props, propName, displayName){
    if (props[propName]) {
        let value = props[propName];
        if (typeof value === "number"){
            return value >= 0 && value <=100
            ? null
            : new Error(propName + " is not within 0 to 100");
        }
    }
    else {
        return new Error(propName + " is required");
    }
 },
};
ProgressBarIndicator.displayName = "ProgressBarIndicator";
export default ProgressBarIndicator;
export {ProgressBarIndicator};
