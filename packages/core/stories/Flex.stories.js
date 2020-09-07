import React from "react";
//import { withInfo } from '@storybook/addon-info'
import Flex from "../src/Flex";

export default { title: "Flex" };

export const flex = () => <Flex flexWrap="wrap">Flex Test</Flex>;
flex.story = {
  name: "Flex",
};
