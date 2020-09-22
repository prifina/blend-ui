import React, {createRef} from "react";
import renderer from "react-test-renderer";
import ThemeProvider from "../src/theme/ThemeProvider";
import TextArea from "../src/TextArea";

test("TextArea renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <TextArea minHeight={"100px"} />
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Expanded TextArea renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <TextArea expand />
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
