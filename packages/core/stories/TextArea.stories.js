import React from "react";
import TextArea from "../src/TextArea";

export default { title: "TextArea" };

export const textarea = () => <TextArea minHeight={"100px"} />;
textarea.story = {
  name: "TextArea",
};

export const textarea2 = () => <TextArea expand />;
textarea2.story = {
  name: "TextArea Expand",
};
