import React from "react";
import {ProgressBarIndicator} from "../src/ProgressBarIndicator";


export const progressbar1 = () => <ProgressBarIndicator color = "lightgrey" value = {90} max = {100} />;
progressbar1.story = {
  name: "ProgressBar Error", 
};

export const progressbar2 = () => <ProgressBarIndicator value = {30} max = {100} />;
progressbar2.story = {
  name: "ProgressBar 30", 
};

export const progressbar3 = () => <ProgressBarIndicator value = {100} />;
progressbar3.story = {
  name: "ProgressBar 100", 
};

