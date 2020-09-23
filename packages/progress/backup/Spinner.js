import React from 'react';
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const sizes = {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  };


  
/** 
 * Spinner, uses css animation 
 */
const Spinner=(props)=>{ 

//console.log('SPINNER ',props);
const {size,color}=props;
const _size = sizes[size] || size;

const _spinner=styled.div`
  animation: ${rotate360} 0.5s linear infinite;
  transform: translateZ(0); 
  display: inline-block;
  border-top: 2px solid ${color};
  border-right: 2px solid ${color};
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  
  background: transparent;
  
  width: ${_size};
  height: ${_size};
  
  border-radius: 50%;
`;

return <_spinner/>

}

Spinner.defaultProps = {
  size: 'xl',
  color: 'black' 
};
Spinner.propTypes = {
   /** spinner width&height */
  size: PropTypes.oneOfType([PropTypes.string,PropTypes.oneOf(Object.keys(sizes)) ]),
   /** spinner color */
  color: PropTypes.string
}

Spinner.displayName = 'Spinner';
export default Spinner;
