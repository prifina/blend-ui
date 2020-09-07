import React, { createRef } from "react";

import Box from "../src/Box";

export default { title: "Box" };

const boxRef = createRef();

export const box = () => (
  <Box width={[1]} height={"100px"} p={2} border={"1px solid black"}>
    Something
  </Box>
);
box.story = {
  name: "Box",
};

export const box2 = () => (
  <Box
    width={[1 / 2]}
    height={"100px"}
    border={"1px solid"}
    borderRadius={4}
    p={2}
    ref={boxRef}
    foo={"bar"}
  >
    Something with Ref
  </Box>
);
box2.story = {
  name: "Box with ref",
};
