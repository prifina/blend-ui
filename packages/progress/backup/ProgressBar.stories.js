import React from "react";
import { ProgressBar, ProgressLabel } from "../src/ProgressBar";

export default { title: "ProgressBar" };

export const progressBar = () => (
  <ProgressBar height="30px" percentage={20}>
    <ProgressLabel>20%</ProgressLabel>
  </ProgressBar>
);
progressBar.story = {
  name: "ProgressBar",
};

export const progressBar2 = () => <ProgressBar percentage={20}></ProgressBar>;
progressBar2.story = {
  name: "ProgressBar2",
};
