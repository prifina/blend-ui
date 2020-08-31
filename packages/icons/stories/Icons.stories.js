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
import { activityIcon, Icon } from "../components";
// npm install --save-dev @iconify/react @iconify/icons-fe

export default {
  title: "Icons",
};

export const addCircle = () => (
  <Icon icon={activityIcon} title={"Add"} width={"36px"} color={"green"} />
);

addCircle.story = {
  name: "ADD",
};

export const iconify = () => (
  <BlendIcon iconify={activityIcon} size={"50"} color={"#E535AB"} />
);

iconify.story = {
  name: "ICONIFY",
};
