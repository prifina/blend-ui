import React from "react";
import Button from "../src/Button";
import { BlendIcon } from "@blend-ui/icons";
import { default as eyeIcon } from "@iconify/icons-bx/bx-show";
import colors from "../src/theme/colors";

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

export const button5 = () => (
  <Button disabled variation={"link"}>
    Something
  </Button>
);
button5.story = {
  name: "Button disabled link",
};

export const button6 = () => (
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
button6.story = {
  name: "Button file",
};

export const button7 = () => <input type="file" />;
button7.story = {
  name: "Input file",
};
export const button8 = () => (
  <Button
    onChange={e => {
      console.log(e);
    }}
  >
    <BlendIcon iconify={eyeIcon} />
    Something
  </Button>
);
button8.story = {
  name: "Icon Button",
};

export const button9 = () => (
  <Button variation={"outline"} colorStyle={"secondary"}>
    Outline
  </Button>
);
button9.story = {
  name: "Button Outline",
};

export const button10 = () => (
 
<>
    <Button size="lg">Button</Button>
    <Button size="md">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="xs">Button</Button>
</>
);
button10.story = {
  name: "Size Varation",
};

export const button11 = () => (
  <div
    style={{
      height: 100,
      width: 600,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Button>Default</Button>
    <Button
      style={{ backgroundColor: colors.baseHover, border: colors.baseHover }}
    >
      Hover
    </Button>
    <Button disabled>Disabled</Button>
  </div>
);
button11.story = {
  name: "State Varation",
};

export const button12 = () => (
  <div
    style={{
      height: 100,
      width: 60,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Button variation={"fill"}>Fill</Button>
    <Button variation={"outline"}>Outline</Button>
    <Button variation={"link"}>Link</Button>
    <Button variation={"file"}>File</Button>
  </div>
);
button12.story = {
  name: "Style Varation",
};

export const button13 = () => (
  <div>
    <Button variation={"fill"} colorStyle={"secondary"}>
      Default
    </Button>
    <Button variation={"fill"} colorStyle={"error"}>
      Default
    </Button>

    <Button variation={"outline"} colorStyle={"secondary"}>
      Outline
    </Button>
    <Button variation={"outline"} colorStyle={"error"}>
      Outline
    </Button>
  </div>
);
button13.story = {
  name: "Color Variations",
};

export const button14 = () => (
  <div
    style={{
      height: 100,
      width: 600,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Button
      onChange={e => {
        console.log(e);
      }}
    >
      <BlendIcon iconify={eyeIcon} size="12px" />R
    </Button>
    <Button
      onChange={e => {
        console.log(e);
      }}
    >
      L
      <BlendIcon iconify={eyeIcon} size="12px" />
    </Button>
    <Button
      onChange={e => {
        console.log(e);
      }}
    >
      <BlendIcon iconify={eyeIcon} size="12px" />
      L&R
      <BlendIcon iconify={eyeIcon} size="12px" />
    </Button>
  </div>
);
button14.story = {
  name: "Icon L&R",
};
