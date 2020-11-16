import React from "react";
import Select from "../src/Select";
import Label from "../src/Label";
import Box from "../src/Box";
import { action } from "@storybook/addon-actions";

export default { title: "Select" };

const changeAction = e => {
  // console.log("CHANGE ", e);
  // console.log("CHANGE ", e.target, e.currentTarget, e.currentTarget.id);
  action(`${e.currentTarget.id} was clicked`)(e.currentTarget.value);
};

export const select = () => (
  <Box>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <Select
      id="cabinClass"
      name="cabinClass"
      defaultValue="Premium Economy"
      onChange={changeAction}
    >
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
