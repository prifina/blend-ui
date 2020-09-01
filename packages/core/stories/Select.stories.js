import React from "react";
import Select from "../src/Select";
import Label from "../src/Label";
import Box from "../src/Box";

//import { Icon } from "@blend-ui/icons";
//import { Graphql } from "@blend-ui/icons";
//import { Icon, InlineIcon } from "@iconify/react";
//import { default as ChevronDown } from "@iconify/icons-fe/drop-down";

export default { title: "Select" };
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

export const select = () => (
  <Box>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy">
      <option>Economy</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
      <option>
        With a super long label that doesn't get clobbered by the chevron
      </option>
    </Select>
  </Box>
);
select.story = {
  name: "Select",
};
