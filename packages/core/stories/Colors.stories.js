import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { colorsList } from "../src/theme/colors";

const filterGroup = filter =>
  Object.keys(colorsList).filter(color => color.indexOf(filter) === 0);

storiesOf("Colors", module).add("Default Theme", () => (
  <div style={{ padding: "20px" }}>
    <h3>Brand Colors</h3>
    <ColorGroup group={filterGroup("brand")} />

    <h3>Base Colors</h3>
    <ColorGroup group={filterGroup("base")} />

    <h3>Text Colors</h3>
    <ColorGroup group={filterGroup("text")} />

    <h3>Component Colors</h3>
    <ColorGroup group={filterGroup("component")} />

    <h3>Background Colors</h3>
    <ColorGroup group={filterGroup("background")} />

    <h3>Alert Colors</h3>
    <ColorGroup group={filterGroup("alert")} />

    <h3>Menu Colors</h3>
    <ColorGroup group={filterGroup("menu")} />
  </div>
));

const Color = ({ color }) => (
  <>
    <li
      style={{
        borderRadius: "5px",
        border: "1px solid lightgray",
        padding: "5px",
      }}
    >
      <span
        style={{
          backgroundColor: colorsList[color],
          display: "block",
          height: "4em",
          marginBottom: "0.3em",
          borderRadius: "5px",
          border: "1px solid lightgray",
        }}
      />
      <span style={{ textTransform: "capitalize" }}>{color}</span> <br />
      <span>{color}</span> <br />
      <span>{colorsList[color]}</span> <br />
    </li>
  </>
);

Color.propTypes = {
  color: PropTypes.string.isRequired,
};

const ColorGroup = ({ group }) => (
  <ul
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 175px))",
      gridGap: "20px",
      marginBottom: "40px",
      listStyle: "none",
      width: 900,
    }}
  >
    {group.map(color => {
      return <Color color={color} key={color} />;
    })}
  </ul>
);

ColorGroup.propTypes = {
  group: PropTypes.array.isRequired,
};
