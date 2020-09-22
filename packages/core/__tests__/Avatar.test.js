import React from "react";
import renderer from "react-test-renderer";
import Avatar from "../src/Avatar";
import ThemeProvider from "../src/theme/ThemeProvider";

test("Avater renders initials correctly", () => {
    const tree = renderer.create(<ThemeProvider>
        <Avatar initials={"TR"} width={100} />
    </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Avater renders image correctly", () => {
    const tree = renderer.create(<ThemeProvider>
        <Avatar src={"https://i.pravatar.cc/100"} alt={"photo"} width={100} />
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
