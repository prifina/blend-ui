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
let checkedStatus = true;

const checkAction = e => {
  console.log("CHECK ", e);
  console.log("CHECK ", e.target, e.currentTarget, e.currentTarget.id);
  action(`${e.currentTarget.id} was clicked`)(
    e.currentTarget.value,
    e.currentTarget.checked,
  );
  checkedStatus = !checkedStatus;
};
/*
export const checkbox = () => (
  <div>
    <StyledLabel htmlFor="unchecked_box">
      <Checkbox onChange={checkAction} />
      Unchecked by default
    </StyledLabel>
  </div>
);
*/
export const checkbox = () => (
  <Checkbox onChange={checkAction} id="checkbox" checked={checkedStatus}>
    Unchecked by default
  </Checkbox>
);
export const checkbox2 = () => (
  <div>
    <StyledLabel htmlFor="unchecked_box">
      <input type="checkbox" onChange={checkAction} />
      Unchecked by default
    </StyledLabel>
  </div>
);
