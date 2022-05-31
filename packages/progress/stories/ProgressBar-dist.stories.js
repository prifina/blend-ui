import React from "react";
import { ProgressBar, ProgressLabel } from "@blend-ui/progress";

export default { title: "ProgressBar-dist" };

export const progressBarDist = () => (
  <ProgressBar height="30px" percentage={20}>
    <ProgressLabel>20%</ProgressLabel>
  </ProgressBar>
);
progressBarDist.story = {
  name: "ProgressBar-dist",
};

export const progressBarDist2 = () => (
  <ProgressBar percentage={20}></ProgressBar>
);
progressBarDist2.story = {
  name: "ProgressBarDist2",
};
