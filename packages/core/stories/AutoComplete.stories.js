import React from "react";
import AutoComplete from "../src/AutoComplete";

export default { title: "AutoComplete" };

export const auto = () => (
  <AutoComplete
    suggestions={[
      "Alligator",
      "Bask",
      "Crocodilian",
      "Death Roll",
      "Eggs",
      "Jaws",
      "Reptile",
      "Solitary",
      "Tail",
      "Wetlands",
    ]}
  />
);
auto.story = {
  name: "AutoComplete",
};
