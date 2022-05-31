/* eslint-disable import/no-anonymous-default-export */

//import babel from "@rollup/plugin-babel";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";

const extensions = [".js"];

export default [
  {
    input: "src/index.js",
    plugins: [
      externals(),
      resolve({ extensions }),
      babel({
        babelHelpers: "bundled",
        include: ["src/**/*.js"],
        extensions,
        exclude: "./node_modules/**",
        presets: ["@babel/preset-react"],
      }),
    ],
    output: [
      {
        exports: "auto",
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
        plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
      },
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
        plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
      },
    ],
  },
];
