import React from "react";
import Radio from "../src/Radio";
import Label from "../src/Label";

import styled from "styled-components";
import { action } from "@storybook/addon-actions";

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
`;

export default { title: "Radio" };

const checkAction = e => {
  console.log("CLICK ", e, e.target);
  action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

export const radio = () => (
  <div>
    <Radio checked value="TABLE" fontSize="14px" onClick={checkAction}>
      selected
    </Radio>
    <Radio value="OBJECT" fontSize="14px" onClick={checkAction}>
      not selected
    </Radio>
    <Radio disabled value="ENUM" fontSize="14px" onClick={checkAction}>
      disabled
    </Radio>
  </div>
);

/*
export const radio = () => (
  <div>
    <Label fontSize="14px" onClick={checkAction}>
      <Radio checked value="TABLE" />
      <LabelText>selected</LabelText>
    </Label>
    <Label fontSize="14px" onClick={checkAction}>
      <Radio value="OBJECT" />
      <LabelText>not selected</LabelText>
    </Label>
    <Label fontSize="14px">
      <Radio disabled />
      <LabelText>disabled</LabelText>
    </Label>
  </div>
);

export const radio2 = () => (
  <div onChange={action("changed")}>
    <Label variation="inline" fontSize="14px">
      <Radio checked />
      <LabelText>selected</LabelText>
    </Label>
    <Label variation="inline" fontSize="14px">
      <Radio />
      <LabelText>not selected</LabelText>
    </Label>
    <Label variation="inline" fontSize="14px">
      <Radio disabled />
      <LabelText>disabled</LabelText>
    </Label>
  </div>
);
*/
