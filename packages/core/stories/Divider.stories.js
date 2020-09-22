import React from "react";
import Divider from "../src/Divider";
import Text from "../src/Text";

export default { title: "Divider" };

export const divider = () => (
  <Divider foo={"bar"} height={"5px"} ml={3} color={"red"} />
);
divider.story = {
  name: "Divider",
};

export const divider2 = () => (
  <Divider as={"div"} color={"green"} height={"5px"} ml={3} />
);
divider2.story = {
  name: "Divider variation",
};

export const divider3 = () => <Divider as={"div"} height={"5px"} />;
divider3.story = {
  name: "Divider theme color",
};

export const divider4 = () => <Divider as={"div"}>Text title</Divider>;
divider4.story = {
  name: "Title Divider",
};

export const divider5 = () => (
  <Divider as={"div"}>
    <Text textStyle={"h6"}>Text title</Text>
  </Divider>
);
divider5.story = {
  name: "Title Text Divider",
};
