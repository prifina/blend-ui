import React, { createRef } from "react";
import renderer from "react-test-renderer";
import ThemeProvider from "../src/theme/ThemeProvider";
import Label from "../src/Label";
import Radio from "../src/Radio";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
`;

const checkAction = e => {
  console.log("CLICK ", e, e.target);
  action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

test("Link renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Label fontSize="14px" onClick={checkAction}>
          <Radio
            checked
            value="TABLE"
            onChange={e => {
              console.log(e);
            }}
          />
          <LabelText>selected</LabelText>
        </Label>
        <Label fontSize="14px" onClick={checkAction}>
          <Radio
            value="OBJECT"
            onChange={e => {
              console.log(e);
            }}
          />
          <LabelText>not selected</LabelText>
        </Label>
        <Label fontSize="14px">
          <Radio
            disabled
            onChange={e => {
              console.log(e);
            }}
          />
          <LabelText>disabled</LabelText>
        </Label>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
