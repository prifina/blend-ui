import React from "react";
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

export const text = () => (
  <Text bold italic m={10}>
    Bold and Italic
  </Text>
);
text.story = {
  name: "Text +props",
};

export const text2 = () => <Text fontSize={"lg"}>Font size LG</Text>;
text2.story = {
  name: "Text +size",
};

export const text3 = () => (
  <Text m={10} $fontSize={"md"} textStyle={"body"}>
    TextStyle body
  </Text>
);
text3.story = {
  name: "Text +style",
};

export const text4 = () => (
  <Text m={10} $fontSize={"md"} textStyle={"body"} colorStyle={"error"}>
    TextStyle body + colorStyle error
  </Text>
);
text4.story = {
  name: "Text + error",
};
