import React from "react";
import Link from "../src/Link";

export default { title: "Link" };

export const link = () => (
  <Link href={"#"} target={"_blank"}>
    Something
  </Link>
);
link.story = {
  name: "Link",
};
