import React, {createRef} from "react";
import renderer from "react-test-renderer";
import Label from "../src/Label";
import ThemeProvider from "../src/theme/ThemeProvider";

test("Label renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Label pointer nowrap variation={"block"}>
                Something very long text next line here{" "}
            </Label>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
