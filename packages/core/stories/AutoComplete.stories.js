import React from "react";
import AutoComplete from "../src/AutoComplete";
import Text from "../src/Text";

export default { title: "AutoComplete" };

const list = [
  { key: "0", value: "Alligator" },
  { key: "1", value: "Bask" },
  {
    key: "2",
    value: "Crocodilian",
    component: <Text as="span">Compomnent text</Text>,
  },
  { key: "3", value: "Death Roll" },
  { key: "4", value: "Eggs" },
  { key: "5", value: "Jaws" },
  { key: "6", value: "Reptile" },
  { key: "7", value: "Solitary" },
  { key: "8", value: "Tail" },
  { key: "9", value: "Wetlands" },
];

export const auto = () => <AutoComplete suggestions={list} />;
auto.story = {
  name: "AutoComplete",
};

export const auto2 = () => (
  <AutoComplete suggestions={list} showList={true} activeItem={2} />
);
auto2.story = {
  name: "AutoComplete, showing active item",
};
