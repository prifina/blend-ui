import React from "react";
import renderer from "react-test-renderer";
import Image from "../src/Image";
import ThemeProvider from "../src/theme/ThemeProvider";

test("Image renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Image src={"https://picsum.photos/200/200"} />
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Circle Image renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Image src={"https://picsum.photos/200/200"} shape={"circle"} alt={"Image"} />
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Rounded Image renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Image
                src={"https://picsum.photos/200/200"}
                shape={"rounded"}
                alt={"Image"}/>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Square Image renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Image
            src={"https://picsum.photos/200/200"}
            alt={"Image"}
            shape={"square"}
            width={300}/>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
