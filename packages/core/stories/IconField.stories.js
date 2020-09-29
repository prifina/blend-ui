import React, { useState } from "react";
import IconField from "../src/IconField";
import Input from "../src/Input";
import Box from "../src/Box";

import { BlendIcon } from "@blend-ui/icons";
import { default as eyeIcon } from "@iconify/icons-bx/bx-show";
import bxLock from "@iconify/icons-bx/bx-lock";
import bxPhone from "@iconify/icons-bx/bx-phone";
import bxUser from "@iconify/icons-bx/bx-user";
import bxEnvelope from "@iconify/icons-bx/bx-envelope";

import bxHide from "@iconify/icons-bx/bx-hide";
//import bxHide from '@iconify/icons-bx/bx-hide';

//import bxLock from '@iconify/icons-bx/bx-lock';
//import bxPhone from '@iconify/icons-bx/bx-phone';
//import bxUser from '@iconify/icons-bx/bx-user';
//import bxEnvelope from '@iconify/icons-bx/bx-envelope';

//import { accountIcon, eyeIcon, BlendIcon } from "@blend-ui/icons";

export default { title: "Icon Field" };

export const iconfieldinput = () => (
  <IconField>
    <IconField.LeftIcon
      iconify={bxUser}
      color={"componentPrimary"}
      size={"17"}
    />
    <IconField.InputField placeholder={"Enter value here"} />
  </IconField>
);
iconfieldinput.story = {
  name: "Username",
};

export const iconfieldinput1 = () => (
  <IconField disabled>
    <IconField.LeftIcon
      iconify={bxUser}
      color={"componentPrimary"}
      size={"17"}
    />
    <IconField.InputField placeholder={"Enter value here"} />
  </IconField>
);
iconfieldinput1.story = {
  name: "Disabled Username",
};
export const iconfieldinput2 = () => (
  <IconField>
    <IconField.LeftIcon
      iconify={bxUser}
      color={"componentPrimary"}
      size={"17"}
    />
    <IconField.InputField placeholder={"Enter value here"} error={true} />
  </IconField>
);
iconfieldinput2.story = {
  name: "Error Username",
};

export const iconfieldinput3 = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const onHide = e => {
    console.log("Hide");
    e.preventDefault();
    setHidePassword(!hidePassword);
  };
  return (
    <IconField>
      <IconField.LeftIcon
        iconify={bxLock}
        color={"componentPrimary"}
        size={"17"}
      />
      <IconField.InputField placeholder={"Enter value here"} />
      <Box display={"inline-flex"} onClick={onHide}>
        <IconField.RightIcon
          iconify={hidePassword ? eyeIcon : bxHide}
          color={"componentPrimary"}
          size={"17"}
        />
      </Box>
    </IconField>
  );
};
iconfieldinput3.story = {
  name: "Password Field Input",
};

/*
export const iconfieldinput = () => (
  <IconField>
    <BlendIcon iconify={bxUser} color={"componentPrimary"} />
    <Input placeholder={"Enter value here"} />
  </IconField>
);
iconfieldinput.story = {
  name: "Username",
};

export const iconfieldinput2 = () => (
  <IconField>
    <BlendIcon iconify={bxEnvelope} color={"componentPrimary"} />
    <Input placeholder={"Enter value here"} />
  </IconField>
);
iconfieldinput2.story = {
  name: "Email",
};

export const iconfieldinput3 = () => (
  <IconField>
    <BlendIcon iconify={bxPhone} color={"componentPrimary"} />
    <Input placeholder={"Enter value here"} />
  </IconField>
);
iconfieldinput3.story = {
  name: "Telephone",
};

export const iconfieldinput4 = () => (
  <IconField>
    <BlendIcon iconify={bxLock} color={"componentPrimary"} />
    <Input placeholder={"Enter value here"} />
    <BlendIcon iconify={eyeIcon} color={"componentPrimary"} />
  </IconField>
);
iconfieldinput4.story = {
  name: "Password Field Input ",
};

*/
