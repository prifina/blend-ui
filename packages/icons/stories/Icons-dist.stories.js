/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { BlendIcon, Graphql } from "@blend-ui/icons";
import rocketIcon from "@iconify/icons-fe/rocket";

export default {
  title: "Icons-dist",
};
/*
height={34 * 1.3 + "px"}
width={"34px"}
*/
export const blendIcons1 = () => <Graphql title={"GraphQL"} color={"green"} />;

blendIcons1.story = {
  name: "GraphQL",
};

export const blendIcons2 = () => (
  <BlendIcon iconify={rocketIcon} size={"50"} color={"#E535AB"} />
);

blendIcons2.story = {
  name: "ICONIFY",
};
