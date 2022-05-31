import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "@blend-ui/core";

import { ProgressBar, ProgressLabel } from "@blend-ui/progress";

const MyProgress = () => (
  <ProgressBar height="30px" percentage={20}>
    <ProgressLabel>20%</ProgressLabel>
  </ProgressBar>
);

describe("Creating component", () => {
  test("basic list", () => {
    const component = renderer.create(
      <ThemeProvider>
        <MyProgress />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    //console.log(JSON.stringify(tree));
    expect(tree).toMatchObject({
      type: "div",
      props: { className: "ThemeProvider__Base-sc-1w52cfi-0 fMEevm" },
      children: [
        {
          type: "div",
          props: {
            height: "30px",
            className: "ProgressBar__Wrapper-sc-cwxzkj-1 cMbpzz",
          },
          children: [
            {
              type: "div",
              props: {
                height: "30px",
                color: "red",
                className: "ProgressBar___ProgressBar-sc-cwxzkj-2 ZjDsr",
              },
              children: [
                {
                  type: "div",
                  props: {
                    className: "ProgressBar__ProgressLabel-sc-cwxzkj-0 DpHLQ",
                  },
                  children: ["20%"],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
