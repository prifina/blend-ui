import React from "react";
import Button from "../src/Button";
import { BlendIcon } from "@blend-ui/icons";
import { default as eyeIcon } from "@iconify/icons-bx/bx-show";
//import { eyeLine as eyeIcon } from "@iconify/icons-ri/eye-line";
/*

import { BlendIcon } from "@blend-ui/icons";
import { default as BoxChecked } from "@iconify/icons-bx/bx-check-square";
import { default as BoxEmpty } from "@iconify/icons-bx/bx-square";
// npm install --save-dev @iconify/react @iconify/icons-fe
import { Icon, InlineIcon } from '@iconify/react';
import eyeIcon from '@iconify/icons-fe/eye';

// npm install --save-dev @iconify/react @iconify/icons-bx
import { Icon, InlineIcon } from '@iconify/react';
import bxHide from '@iconify/icons-bx/bx-hide';

// npm install --save-dev @iconify/react @iconify/icons-bx
import { Icon, InlineIcon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';

// npm install --save-dev @iconify/react @iconify/icons-ri
import { Icon, InlineIcon } from '@iconify/react';
import eyeLine from '@iconify/icons-ri/eye-line';
// npm install --save-dev @iconify/react @iconify/icons-ri
import { Icon, InlineIcon } from '@iconify/react';
import eyeOffLine from '@iconify/icons-ri/eye-off-line';
*/
export default { title: "Button" };

export const button = () => <Button>Default</Button>;
button.story = {
  name: "Button",
};

export const button2 = () => <Button variation={"outline"}>Outline</Button>;
button2.story = {
  name: "Button outline",
};

export const button3 = () => <Button disabled>Disabled</Button>;
button3.story = {
  name: "Button disabled",
};

export const button4 = () => <Button variation={"link"}>Something</Button>;
button4.story = {
  name: "Button link",
};

export const button41 = () => (
  <Button disabled variation={"link"}>
    Something
  </Button>
);
button41.story = {
  name: "Button disabled link",
};

export const button5 = () => (
  <Button
    variation={"file"}
    input={""}
    onChange={e => {
      console.log(e);
    }}
  >
    Something
  </Button>
);
button5.story = {
  name: "Button file",
};

export const button6 = () => <input type="file" />;
button6.story = {
  name: "Input file",
};
export const button7 = () => (
  <Button
    onChange={e => {
      console.log(e);
    }}
  >
    <BlendIcon iconify={eyeIcon} />
    Something
  </Button>
);
button7.story = {
  name: "Icon Button",
};

export const button8 = () => (
  <Button variation={"outline"} colorStyle={"error"}>
    Outline
  </Button>
);
button8.story = {
  name: "Button outline colorStyle",
};
