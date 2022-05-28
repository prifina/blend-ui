/* eslint-disable import/no-anonymous-default-export */
//import babel from "@rollup/plugin-babel";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js"];

export default [
  {
    input: "components/index.js",
    plugins: [
      commonjs(),
      resolve({ extensions }),
      babel({
        babelHelpers: "runtime",
        include: ["components/**/*.js"],
        extensions,
        exclude: "./node_modules/**",
        presets: ["@babel/preset-react"],
      }),
    ],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: false,
        preserveModules: true,
        plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
      },
    ],
  },
];
