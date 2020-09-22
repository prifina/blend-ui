import React from "react";
import renderer from "react-test-renderer";
import {accountIcon, BlendIcon} from "@blend-ui/icons";
import Input from "../src/Input";
import IconField from "../src/IconField";
import ThemeProvider from "../src/theme/ThemeProvider";

test("IconField renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
        <IconField>
            <BlendIcon iconify={accountIcon} />
            <Input placeholder={"Enter value here"} />
        </IconField>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
