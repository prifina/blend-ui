import React from "react";
import { fontWeight } from "styled-system";
import Text from "../src/Text";
//import { ThemeProvider, ThemeContext } from "styled-components";

// Note use styled components ThemeProvider, not what is inclued on core....
/*
import { ThemeProvider, ThemeContext } from "styled-components";
import { createTheme, Text, Flex } from "@blend-ui/core";
import { default as builderTheme } from "./theme";

const theme = createTheme(builderTheme);

export default {
  title: "Link-List",
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
};

const Theme = ({ children }) => {
  const themeContext = React.useContext(ThemeContext);
  // The theme context is available here.
  console.log(themeContext);
  return children;
};
*/

//export default { title: "Text" };

/*
const Theme = ({ children }) => {
  const themeContext = React.useContext(ThemeContext);
  // The theme context is available here.
  console.log(themeContext);
  return children;
};
*/
export default {
  title: "Text",
  /*
  decorators: [
    storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
  */
};

// export const text = () => (
//   <Text bold italic m={10}>
//     Bold and Italic
//   </Text>
// );
// text.story = {
//   name: "Text +props",
// };

export const text = () => (
  <div>
    <Text fontSize="xxs">XXSmall</Text>
    <Text fontSize="xs">XSmall</Text>
    <Text fontSize="sm">Small</Text>
    <Text fontSize="md">Medium</Text>
    <Text fontSize="lg">Large</Text>
    <Text fontSize="lgx">XLarge</Text>
    <Text fontSize="xl">2XLarge</Text>
    <Text fontSize="2md">3XLarge</Text>
    <div style={{ paddingTop: 10 }}>
      <Text fontSize="2xl">4XLarge</Text>
    </div>
  </div>
);
text.story = {
  name: "Text sizes",
};

// export const text2 = () => <Text fontSize={"lg"}>Font size LG</Text>;
// text2.story = {
//   name: "Text +size",
// };

// export const text3 = () => (
//   <Text m={10} $fontSize={"md"} textStyle={"body"}>
//     TextStyle body
//   </Text>
// );
// text3.story = {
//   name: "Text +style",
// };

export const text4 = () => (
  <Text m={10} $fontSize={"md"} textStyle={"body"} colorStyle={"error"}>
    Error Text
  </Text>
);
text4.story = {
  name: "Error text",
};

// export const text5 = () => <Text textStyle={"h6"}>TextStyle h6</Text>;
// text5.story = {
//   name: "Text + h6",
// };

export const text5 = () => (
  <div>
    <Text textStyle={"body"}>Body</Text>
    <Text textStyle={"lightBody"}>Light Body</Text>
    <Text textStyle={"detail"}>Detail</Text>
    <Text textStyle={"caption"}>Caption</Text>
    <Text textStyle={"caption2"}>Caption 2</Text>
  </div>
);
text5.story = {
  name: "Text styles",
};

export const text6 = () => (
  <div>
    <Text color="green">Green</Text>
    <Text color="blue">Blue</Text>
    <Text color="yellow">Yellow</Text>
  </div>
);
text6.story = {
  name: "Text color",
};

export const text7 = () => (
  <div>
    <Text textStyle={"h1"}>Heading 1</Text>
    <Text textStyle={"h2"}>Heading 2</Text>
    <Text textStyle={"h3"}>Heading 3</Text>
    <Text textStyle={"h4"}>Heading 4</Text>
    <Text textStyle={"h5"}>Heading 5</Text>
    <Text textStyle={"h6"}>Heading 6</Text>
  </div>
);
text7.story = {
  name: "Headings",
};

// hairline: 100,
// extraLight: 200,
// light: 300,
// normal: "normal",
// regular: 400,
// medium: 500,
// semiBold: 600,
// bold: 700,
// extraBold: 800,
// black: 900,
