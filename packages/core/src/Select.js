import React, { forwardRef } from "react";
import styled from "styled-components";
import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { BlendIcon } from "@blend-ui/icons";
//import { dropDownIcon as ChevronDown } from "@blend-ui/icons/icons-fe/iconSet";
//import { default as ChevronDown } from "@iconify/icons-fe/drop-down";
import bxCaretDown from "@iconify/icons-bx/bx-caret-down";
import bxCaretUp from "@iconify/icons-bx/bx-caret-up";
import bxChevronUp from "@iconify/icons-bx/bx-chevron-up";
import bxChevronDown from "@iconify/icons-bx/bx-chevron-down";

//import dropUp from '@iconify/icons-fe/drop-up';

//import BlendIcon from "@blend-ui/icons/BlendIcon";
//import { InlineIcon as BlendIcon } from "@iconify/react";
//import { InlineIcon as BlendIcon } from "@blend-ui/icons";

//import bxChevronUp from '@iconify/icons-bx/bx-chevron-up';
//import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';

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
  }
  return [selectProps, variationProps];
};

const SelectElement = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  margin:0;
  ${componentStyle}
  ${space} ${typography}

  ::-ms-expand {
    display: none;
  }
  &:disabled {
    opacity: 0.25;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;
/*
const ClickableIcon = styled(BlendIcon).attrs(props => ({
  color: props.theme.colors.black,
}))`
  pointer-events: none;
  margin-left: -32px;
`;
*/
const ClickableIcon = styled(BlendIcon)`
  color: ${props =>
    props.variation === "fill"
      ? props.theme.colors.baseWhite
      : props.theme.colors.basePrimary};
  pointer-events: none;
  margin-left: ${props => (props.sizevariation === "sm" ? "-22px" : "-32px")};
`;
//<Icon icon={activityIcon} title={"Add"} width={"36px"} color={"green"} />
const Select = forwardRef(({ size, ...props }, ref) => {
  let iconStyle;
  if (size === "sm") {
    iconStyle = bxChevronDown;
  }
  return (
    <StyledBox width={"100%"}>
      <SelectElement {...props} ref={ref} sizevariation={size} />
      <ClickableIcon
        iconify={iconStyle}
        sizevariation={size}
        variation={props.variation}
      />
    </StyledBox>
  );
});

Select.defaultProps = {
  variation: "fill",
  size: "sm",
};
Select.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
  /** Fixed width&height */
  size: PropTypes.oneOf(["sm", "md", "lg"]),

  /** Variations */
  variation: PropTypes.oneOf(selectVariations),
};
Select.displayName = "Select";
Select.isField = true;

export default Select;
