module.exports = {
  //plugins: ['babel-plugin-styled-components'],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        displayName: true,
      },
    ],
    "babel-plugin-react-docgen",
    // "@babel/plugin-transform-runtime"
  ],
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
