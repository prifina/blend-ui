import React from "react";
import Input from "../src/Input";
import Select from "../src/Select";

// import { BlendIcon } from "../../icons/components";
import { BlendIcon } from "@blend-ui/icons";

import { IconField } from "@blend-ui/icon-field";

import accountIcon from "@iconify/icons-mdi/account";

export default { title: "Input" };

export const input = () => (
  <div style={{ width: 200 }}>
    <Input type="text" placeholder="Input" />
  </div>
);
input.story = {
  name: "Input",
};

export const input2 = () => (
  <div style={{ width: 200 }}>
    <Input disabled type="text" />
  </div>
);

input2.story = {
  name: "Input disabled",
};

export const input3 = () => (
  <div style={{ width: 200 }}>
    <Input placeholder={"Enter value here"} colorStyle={"error"} />
  </div>
);
input3.story = {
  name: "Input Styled",
};

export const input4 = () => (
  <div style={{ width: 200 }}>
    <Input placeholder={"Enter value here"} borders={0} p={0} />
  </div>
);
input4.story = {
  name: "Input Styled no border",
};

export const input5 = () => (
  <div style={{ width: 200 }}>
    <IconField>
      <IconField.LeftIcon
        iconify={accountIcon}
        color={"componentPrimary"}
        size={"17"}
      />
      <Select
        id="cabinClass"
        name="cabinClass"
        defaultValue="Premium Economy"
        onChange={() => {}}
      >
        <option>+1</option>
        <option>+2</option>
        <option>+3</option>
      </Select>
      <IconField.InputField
        id={"username"}
        name={"username"}
        placeholder={"Username"}
      />
    </IconField>
  </div>
);
input5.story = {
  name: "Icon Left + Select",
};

export const input6 = () => (
  <div style={{ width: 200 }}>
    <IconField>
      <IconField.InputField
        id={"username"}
        name={"username"}
        placeholder={"Username"}
      />
      <IconField.RightIcon
        iconify={accountIcon}
        color={"componentPrimary"}
        size={"17"}
      />
    </IconField>
  </div>
);
input6.story = {
  name: "Icon Right",
};

export const input7 = () => (
  <div style={{ width: 200 }}>
    <IconField>
      <IconField.LeftIcon
        iconify={accountIcon}
        color={"componentPrimary"}
        size={"17"}
      />
      <IconField.InputField
        id={"username"}
        name={"username"}
        placeholder={"Username"}
      />
      <IconField.RightIcon
        iconify={accountIcon}
        color={"componentPrimary"}
        size={"17"}
      />
    </IconField>
  </div>
);
input7.story = {
  name: "Icon L&R",
};
