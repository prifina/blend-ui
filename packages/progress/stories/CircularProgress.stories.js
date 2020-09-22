import React from "react";
import {
  CircularProgress,
  CircularProgressLabel,
} from "../src/CircularProgress";
import { ReactComponent as PrifinaLogo } from "./prifina.svg";

export default { title: "CirclularProgress" };

export const circular = () => (
  <CircularProgress size={90} value={20}>
    <CircularProgressLabel>20.5%</CircularProgressLabel>
  </CircularProgress>
);
circular.story = {
  name: "CirclularProgress",
};

export const circular2 = () => <CircularProgress size={120} value={33} />;
circular2.story = {
  name: "CirclularProgress no label",
};

export const circular21 = () => <CircularProgress size={90} value={1} />;
circular21.story = {
  name: "CirclularProgress 0",
};

export const circular22 = () => <CircularProgress size={90} value={33} />;
circular22.story = {
  name: "CirclularProgress 33",
};

export const circular3 = () => (
  <CircularProgress size={90} value={50}>
    <CircularProgressLabel>
      <PrifinaLogo height={"23px"} width={"28px"} />
    </CircularProgressLabel>
  </CircularProgress>
);
circular3.story = {
  name: "Icon Label CirclularProgress",
};
export const circular4 = () => <PrifinaLogo height={"23px"} width={"28px"} />;
circular4.story = {
  name: "Icon ",
};
