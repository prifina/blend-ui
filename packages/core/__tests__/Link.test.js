import React, {createRef} from "react";
import renderer from "react-test-renderer";
import ThemeProvider from "../src/theme/ThemeProvider";
import Link from "../src/Link";

test("Link renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Link href={"#"} target={"_blank"}>
                Something
            </Link>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

