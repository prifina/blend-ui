/* eslint-disable import/no-anonymous-default-export */
import React from "react";
//import IconBase from "../components/IconBase";
//import { default as BlendIcon } from "../components/Icon";
//import { Graphql, GraphqlIcon } from "../components/index";
//import { Icon, InlineIcon } from "@iconify/react";

//https://iconify.design/icon-sets/mdi/
//import plusCircle from "@iconify/icons-mdi/plus-circle";
// npm install --save-dev @iconify/react @iconify/icons-mdi
//import homeIcon from "@iconify/icons-mdi/home";
//import pencilIcon from "@iconify/icons-mdi/pencil";

// npm install --save-dev @iconify/react @iconify/icons-fe

import BlendIcon from "../components/BlendIcon";
//import { accountAddIcon } from "../src/icons-mdi/iconSet";
import { Graphql } from "../components";
// npm install --save-dev @iconify/react @iconify/icons-fe
//import { bxAnchorIcon } from "../components/icons-bx/iconSet";
import rocketIcon from "@iconify/icons-fe/rocket";

export default {
  title: "Icons",
};
/*
height={34 * 1.3 + "px"}
width={"34px"}
*/
export const addCircle = () => <Graphql title={"GraphQL"} color={"green"} />;

addCircle.story = {
  name: "GraphQL",
};

export const iconify = () => (
  <BlendIcon iconify={rocketIcon} size={"50"} color={"#E535AB"} />
);

iconify.story = {
  name: "ICONIFY",
};
