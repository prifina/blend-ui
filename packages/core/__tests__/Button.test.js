import React, {createRef} from "react";
import renderer from "react-test-renderer";
import Button from "../src/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

test("Button renders correctly", () => {
    const tree = renderer.create(<ThemeProvider>
        <Button>Something</Button>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
})
