import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../src/Checkbox";
import Label from "../src/Label";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

export default { title: "Checkbox" };

const StyledLabel = styled(Label)`
  cursor: pointer;
  vertical-align: middle;
`;
let checkedStatus = true;

const CheckboxStateful = () => {
  const [value, setValue] = useState(false);
  return (
    <Checkbox id="checkbox" checked={value} onChange={() => setValue(!value)}>
      State Interaction
    </Checkbox>
  );
};

const checkAction = e => {
  action(`${e.currentTarget.id} was clicked`)(
    e.currentTarget.value,
    e.currentTarget.checked,
  );
  checkedStatus = !checkedStatus;
};

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

storiesOf("Checkbox", module).add("Stateful", () => {
  return <CheckboxStateful>Unchecked</CheckboxStateful>;
});
