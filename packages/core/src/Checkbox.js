import React, { forwardRef } from "react";
import styled from "styled-components";

import { BlendIcon } from "@blend-ui/icons";
import { default as BoxChecked } from "@iconify/icons-bx/bx-check-square";
import { default as BoxEmpty } from "@iconify/icons-bx/bx-square";

/*
import {
  checkBoxOutlineIcon as BoxChecked,
  checkboxBlankOutlineIcon as BoxEmpty,
  BlendIcon,
} from "@blend-ui/icons";
*/
import PropTypes from "prop-types";
import Box from "./Box";

const StyledInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`;

const CheckBoxWrapper = styled(Box)`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  /* padding: 2px; */
  cursor: pointer;
  background-color: inherit;
  color: black;

  svg {
    /*
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 2px;
    */
  }

  svg[data-name="checked"] {
    display: none;
  }

  > input:hover ~ svg[data-name="empty"] {
    color: black;
  }

  > input {
    &:focus ~ svg {
      /*
      border: 1px solid black;
      background-color: white;
      */
    }
  }

  > input:checked {
    & ~ svg[data-name="checked"] {
      display: inline-block;
      color: black;
    }

    & ~ svg[data-name="empty"] {
      display: none;
    }

    &:focus ~ svg {
      /*
      border: 1px solid black;
      background-color: white;
      */
    }

    &:hover ~ svg[data-name="checked"] {
      color: black;
    }
  }
  &:disabled {
    opacity: 0.25;
  }
`;

const Checkbox = forwardRef((props, ref) => {
  const { disabled } = props;

  // Add 4px to Icon's height and width to account for size reduction caused by adding padding to SVG element
  //const borderAdjustedSize = (20 + 4).toString() + "px";
  const borderAdjustedSize = "1.5rem";

  return (
    <CheckBoxWrapper disabled={disabled}>
      <StyledInput type="checkbox" {...props} role="checkbox" ref={ref} />

      <BlendIcon
        iconify={BoxChecked}
        width={borderAdjustedSize}
        data-name="checked"
      />
      <BlendIcon
        iconify={BoxEmpty}
        width={borderAdjustedSize}
        data-name="empty"
      />
    </CheckBoxWrapper>
  );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
