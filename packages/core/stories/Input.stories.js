import React from "react";
import Input from "../src/Input";
import { accountIcon, BlendIcon } from "@blend-ui/icons";

export default { title: "Input" };

export const input = () => <input type="text" />;
input.story = {
  name: "Input",
};

export const input2 = () => <input disabled type="text" />;
input2.story = {
  name: "Input disabled",
};

export const input3 = () => (
  <Input placeholder={"Enter value here"} colorStyle={"error"} />
);
input3.story = {
  name: "Input Styled",
};

export const input4 = () => (
  <Input placeholder={"Enter value here"} borders={0} p={0} />
);
input4.story = {
  name: "Input Styled no border",
};

export const input5 = () => <BlendIcon iconify={accountIcon} />;
input5.story = {
  name: "Icon Input ",
};
