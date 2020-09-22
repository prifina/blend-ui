import React from "react";
import Avatar from "../src/Avatar";

export default { title: "Avatar" };

export const avatar = () => <Avatar initials={"TR"} width={100} />;
avatar.story = {
  name: "Avatar",
};

export const avatar2 = () => (
  <Avatar src={"https://i.pravatar.cc/100"} alt={"photo"} width={100} />
);
avatar2.story = {
  name: "Avatar photo",
};
