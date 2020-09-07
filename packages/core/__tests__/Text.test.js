import React from "react";
import renderer from "react-test-renderer";
import Text from "../src/Text";
import ThemeProvider from "../src/theme/ThemeProvider";

test("Text renders correctly", () => {
    const tree = renderer.create(<ThemeProvider>
        <Text> Something{" "} </Text>
    </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Text renders fontStyle correctly", () => {
    const tree2 = renderer.create( <ThemeProvider><Text italic> Something </Text></ThemeProvider> ).toJSON();
    expect(tree2).toMatchSnapshot();
});
