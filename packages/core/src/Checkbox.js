import React, { forwardRef } from "react";
import styled from "styled-components";

import { BlendIcon } from "@blend-ui/icons";
//import { default as BoxChecked } from "@iconify/icons-bx/bx-check-square";
//import { default as BoxEmpty } from "@iconify/icons-bx/bx-square";
import { default as BoxChecked } from "@iconify/icons-bx/bxs-check-square";
import { default as BoxEmpty } from "@iconify/icons-bx/bxs-square";
import { useId } from "@reach/auto-id";
/*
import {
  checkBoxOutlineIcon as BoxChecked,
  checkboxBlankOutlineIcon as BoxEmpty,
  BlendIcon,
} from "@blend-ui/icons";
*/
import PropTypes from "prop-types";
//import Box from "./Box";
import { useTheme } from "./theme/ThemeProvider";

import Label from "./Label";

const StyledLabel = styled(Label)`
  cursor: pointer;
  vertical-align: middle;
`;

const StyledInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`;

const CheckBoxWrapper = styled.div`
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

const CheckIcon = ({ checked, ...props }) => {
  return checked ? (
    <BlendIcon iconify={BoxChecked} data-name="checked" {...props} />
  ) : (
    <BlendIcon iconify={BoxEmpty} data-name="empty" {...props} />
  );
};

const Checkbox = forwardRef((props, ref) => {
  const { disabled, color, id, onChange, checked, children, ...rest } = props;

  // Add 4px to Icon's height and width to account for size reduction caused by adding padding to SVG element
  //const borderAdjustedSize = (20 + 4).toString() + "px";
  const borderAdjustedSize = "1.5rem";
  const theme = useTheme();
  const _id = useId(id);
  const inputID = `blend-checkbox-${_id}`;
  const wrapperID = `blend-checkbox-wrapper-${_id}`;
  //variation:

  return (
    <CheckBoxWrapper
      disabled={disabled}
      id={wrapperID}
      onClick={onChange}
      ref={ref}
    >
      <StyledInput
        type="checkbox"
        {...rest}
        role="checkbox"
        id={inputID}
        checked={checked}
        onChange={onChange}
      />
      <CheckIcon
        checked={checked}
        size={borderAdjustedSize}
        color={color}
        theme={theme}
      />
      <StyledLabel variation={"inline"}>{children}</StyledLabel>
    </CheckBoxWrapper>
  );
});

Checkbox.displayName = "Checkbox";
Checkbox.defaultProps = {
  color: "componentPrimary",
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Checkbox;
