import React, { useState } from "react";

import TagInput from "../src/TagInput";

export default { title: "TagInput" };

export function Component() {
  const [tags, setTags] = useState([]);

  return (
    <div>
      <TagInput variant="outer" tags={tags} setTags={setTags} />
    </div>
  );
}

Component.story = {
  name: "TagInput",
  decorators: [
    Story => {
      return <Story />;
    },
  ],
};
