import React from "react";
import SearchSelect from "../src/SearchSelect";
import Label from "../src/Label";
import Box from "../src/Box";
import Text from "../src/Text";

//import { Icon } from "@blend-ui/icons";
//import { Graphql } from "@blend-ui/icons";
//import { Icon, InlineIcon } from "@iconify/react";
//import { default as ChevronDown } from "@iconify/icons-fe/drop-down";

export default { title: "Search Select" };
/*
export default {
  title: "Icons",
};
//<BlendIcon icon={ChevronDown} title={"Add"} width={"36px"} color={"green"} />

export const addCircle = () => <div>Testing</div>;

addCircle.story = {
  name: "ADD",
};
*/
/*
const selectOptions = [
  { value: 0, option: "Economy" },
  { value: 1, option: "Premium Economy" },
  { value: 2, option: "Something" },
];
*/
const selectOptions = [
  {
    key: "0",
    value: "This is component",
    component: (
      <React.Fragment>
        <Text as="span">This is component</Text>
        <Text as="span">(+358)</Text>
      </React.Fragment>
    ),
  },
  { key: "1", value: "Premium Economy" },
  { key: "2", value: "Something" },
];
export const select = () => (
  <Box>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <SearchSelect
      id="cabinClass"
      name="cabinClass"
      defaultValue="1"
      options={selectOptions}
      onChange={e => {
        console.log("Change ", e.target.value);
      }}
    />
  </Box>
);
select.story = {
  name: "Search Select",
};
export const select2 = () => (
  <Box>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <SearchSelect
      id="cabinClass"
      name="cabinClass"
      size={"xs"}
      defaultValue="1"
      options={selectOptions}
      onChange={e => {
        console.log("Change ", e.target.value);
      }}
      showList={true}
      selectOption={"key"}
      width={"50px"}
    />
  </Box>
);
select2.story = {
  name: "Search Select with full list visible",
};
