import React from "react";
import styled from "styled-components";
import Checkbox from "../src/Checkbox";
import Label from "../src/Label";
import { action } from "@storybook/addon-actions";

export default { title: "Checkbox" };

const StyledLabel = styled(Label)`
  cursor: pointer;
  vertical-align: middle;
`;

const checkAction = e => {
  action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

export const checkbox = () => (
  <div>
    <StyledLabel htmlFor="unchecked_box">
      <Checkbox id="unchecked_box" onChange={checkAction} />
      Unchecked by default
    </StyledLabel>
  </div>
);

export const checkbox2 = () => (
  <div>
    <StyledLabel htmlFor="unchecked_box">
      <input type="checkbox" id="unchecked_box" onChange={checkAction} />
      Unchecked by default
    </StyledLabel>
  </div>
);
