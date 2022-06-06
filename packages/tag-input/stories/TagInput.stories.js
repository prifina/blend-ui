import React from "react";
import { ThemeProvider } from "@blend-ui/core";

import TagInput from "../src/TagInput";

export default { title: "TagInput" };

export function Component() {
  return (
    <div>
      <TagInput type="text" placeholder="TagInput" />
    </div>
  );
}

Component.story = {
  name: "TagInput",
  decorators: [
    Story => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};
