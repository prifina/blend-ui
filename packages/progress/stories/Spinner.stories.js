import React from "react";
import Spinner from "../src/Spinner";

export default { title: "Spinner" };

export const spinner = () => <Spinner size={"xl"} color={"red"} />;
spinner.story = {
  name: "Spinner",
};
/*

export const spinner = () => <div>Testing... </div>;
spinner.story = {
  name: "Spinner",
};
*/
