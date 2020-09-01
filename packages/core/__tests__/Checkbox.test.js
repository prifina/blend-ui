import React, {createRef} from "react";
import renderer from "react-test-renderer";
import Checkbox from "../src/Checkbox";
import Label from "../src/Label";
import styled from "styled-components";
import {action} from "@storybook/addon-actions";
import ThemeProvider from "../src/theme/ThemeProvider";

const StyledLabel = styled(Label)`
  cursor: pointer;
  vertical-align: middle;
`;

const checkAction = e => {
    action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

test("Checkbox renders correctly", () => {
    const tree = renderer.create(<ThemeProvider>
        <StyledLabel htmlFor="unchecked_box">
            <Checkbox id="unchecked_box" onChange={checkAction} />
            Unchecked by default
        </StyledLabel>
    </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

