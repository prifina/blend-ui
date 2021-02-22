import React from "react";
import {ProgressBarIndicator} from "../src/ProgressBarIndicator";


export const progressbar1 = () => <ProgressBarIndicator color = "lightgrey"  value = {90} max = {100} />;
progressbar1.story = {
  name: "ProgressBarError", 
};

export const progressbar2 = () => <ProgressBarIndicator value = {30} max = {100} />;
progressbar2.story = {
  name: "ProgressBar 30", 
};

export const progressbar3 = () => <ProgressBarIndicator value = {100} />;
progressbar3.story = {
  name: "ProgressBar 100", 
};

export const progressbar4 = () => <ProgressBarIndicator color = "red" backgroundColor = "lightgrey" value = {70} height = {30} width = "200px" />;
progressbar4.story = {
  name: "ProgressBarRandom", 
};

