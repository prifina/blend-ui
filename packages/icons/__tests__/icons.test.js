import React from "react";
//import { Icon, InlineIcon } from '../../dist/offline';
import renderer from "react-test-renderer";
//import BlendIcon from "../components/BlendIcon";
import { BlendIcon } from "@blend-ui/icons";
import rocketIcon from "@iconify/icons-fe/rocket";

describe("Creating component", () => {
  test("basic icon", () => {
    const component = renderer.create(
      <BlendIcon iconify={rocketIcon} size={"50"} color={"#E535AB"} />,
    );
    const tree = component.toJSON();
    //console.log(tree);

    expect(tree).toMatchObject({
      type: "svg",
      props: {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        "aria-hidden": true,
        role: "img",
        style: { color: "#E535AB", verticalAlign: "-0.125em" },
        className: "BlendIcon-sc-1i0m6ln-0 kLCpLN",
        dangerouslySetInnerHTML: {
          __html:
            '<path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-.8 0-1.602-1.123-2.274-2.726L5 22l-1-1v-4l2.383-2.383C6.14 13.325 6 12.057 6 11c0-4 3-9 6-9s6 5 6 9c0 1.058-.14 2.325-.383 3.617L20 17v4l-1 1l-2.726-2.726C15.602 20.877 14.801 22 14 22Zm-2-2h-1.615a3.136 3.136 0 0 1-.179-.249c-.347-.532-.72-1.365-1.059-2.383C8.455 15.29 8 12.755 8 11c0-3.198 2.444-7 4-7s4 3.802 4 7c0 1.755-.455 4.291-1.147 6.368c-.34 1.018-.712 1.85-1.06 2.383a3.136 3.136 0 0 1-.178.249H12Zm0-8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"/>',
        },
        width: "50",
        height: "50",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
      },
      children: null,
    });
  });
});
