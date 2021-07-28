import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import { BlendIcon } from "@blend-ui/icons";
import bxChevronUp from "@iconify/icons-bx/bx-chevron-up";
import bxChevronDown from "@iconify/icons-bx/bx-chevron-down";
import PropTypes from "prop-types";

import Box from "./Box";
//import PropTypes from "prop-types";

const selectVariations = ["fill", "outline"];

const componentStyle = props => {
  console.log("VARIATION ", props);
  let selectProps = props.theme.componentStyles.select[props.sizevariation];
  let variationProps = null;
  if (props.variation === "fill") {
    variationProps = {
      color: props.theme.colors.baseWhite,
      backgroundColor: props.theme.colors.baseSecondary,
      border: "none",
    };
  } else if (props.variation === "outline") {
    variationProps = {
      color: props.theme.colors.baseSecondary,
      backgroundColor: 'transparent',
      border: `1px solid ${props.theme.colors.baseSecondary}`,

    };
  }
  return [selectProps, variationProps];
};

const SelectElement = styled.select`
  appearance: none;
  display: block;
  width: ${props => props.width || "100%"};
  height: ${props =>
    props.height
      || "20px"}
  font-family: ${props => props.theme.fonts.body};
  margin:0;
  ${componentStyle}
  ${space} ${typography}

  ::-ms-expand {
    display: none;
  }
  &:disabled {
    opacity: 0.25;
  }
  /*
  option {
    display:none;
    }
    */
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const ClickableIcon = styled(BlendIcon)`
  color: ${props =>
    props.variation === "fill"
      ? props.theme.colors.baseWhite
      : props.theme.colors.basePrimary};
  color: ${props =>
    props.variation === "outline"
      ? props.theme.colors.baseSecondary
      : props.theme.colors.baseWhite};
  pointer-events: none;
  margin-left: ${props =>
    props.sizevariation === "xs" || props.sizevariation === "sm"
      ? "-22px"
      : "-32px"};
`;

const Select = forwardRef(
  ({ variation = "fill", size = "xs", onChange, ...props }, ref) => {
    let iconUp;
    let iconDown;
    if (size === "xs" || size === "sm") {
      iconDown = bxChevronDown;
      iconUp = bxChevronUp;
    }
    const [isOpen, setIsOpen] = useState(false);
    const onSelectClick = e => {
      //console.log("SELECT ", isOpen, e);
      setIsOpen(!isOpen);
    };
    const onSelect = e => {
      //console.log("SELECT ", isOpen, e);
      setIsOpen(!isOpen);
      if (onChange) {
        onChange(e);
      }
    };
    return (
      <StyledBox width={"100%"} >
        <SelectElement
          {...props}
          ref={ref}
          onClick={onSelectClick}
          onChange={onSelect}
          sizevariation={size}
          variation={variation}
        />
        <ClickableIcon
          iconify={isOpen ? iconUp : iconDown}
          sizevariation={size}
          variation={variation}
        />
      </StyledBox>
    );
  },
);

Select.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,

  /** Variations */
  variation: PropTypes.oneOf(selectVariations),
};
Select.displayName = "Select";
Select.isField = true;

export default Select;
