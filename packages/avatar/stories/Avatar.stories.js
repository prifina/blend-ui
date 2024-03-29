import React from "react";
import Avatar from "../src/Avatar";

export default { title: "Avatar" };

export const avatar = () => (
  <Avatar
    src={"https://i.pravatar.cc/100"}
    width={100}
    effect={{ hover: { width: 110, fontWeight: 600 } }}
    outerCircle
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
      margin: "30px",
      filter: "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))",
    }}
    outerCircle
  />
);
avatar2.story = {
  name: "Avatar photo",
};

export const avatar4 = () => (
  <Avatar
    initials={"TR"}
    width={100}
    effect={{ hover: { width: 110, fontWeight: 600 } }}
  />
);
avatar4.story = {
  name: "Avatar",
};

export const avatar5 = () => (
  <Avatar
    initials={"TR"}
    width={100}
    effect={{ hover: { width: 110, fontWeight: 600 } }}
    outerCircle
  />
);
avatar5.story = {
  name: "Avatar Outer Circle",
};
