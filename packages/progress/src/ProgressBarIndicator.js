import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from "@blend-ui/core";


const theme = useTheme();
const barHeight = "4px";
const barwidth = "400px";

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
      background-color: ${props => props.backgroundColor};
  }

  progress[value]:: -webkit-progress-value {
    height: ${props => props.height};
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
    backgroundColor,
    children,
    ...rest

  } = props;

  const _color = color || theme.colors.baseSecondary;  //_color = color || "#00847A";
  const _backGroundColor = backgroundColor || theme.colors.baseTertiary //backgroundColor = "rgba(0, 132, 122, 0.1)";

  return (
      <ProgressContainer color={_color} backgroundColor ={_backGroundColor} width={width} height ={height}>
         <progress value = {value} max = {max}/>
      </ProgressContainer>    
  )

};


ProgressBarIndicator.propTypes ={
  value:PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string, 
  backgroundColor: PropTypes.string,
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
