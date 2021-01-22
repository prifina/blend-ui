import React from "react";
import Avatar from "../src/Avatar";

export default { title: "Avatar" };

export const avatar = () => (
  <Avatar
    initials={"TR"}
    width={100}
    effect={{ hover: { width: 110, fontWeight: 600 } }}
  />
);
avatar.story = {
  name: "Avatar",
};

export const avatar2 = () => (
  <Avatar
    src={"https://i.pravatar.cc/100"}
    alt={"photo"}
    width={100}
    effect={{ hover: { width: 110 } }}
    style={{
      margin: "15px",
      filter: "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))",
    }}
  />
);
avatar2.story = {
  name: "Avatar photo",
};
