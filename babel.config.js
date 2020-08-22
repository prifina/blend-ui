
module.exports = {
    //plugins: ['babel-plugin-styled-components'],
    plugins: [
        [
          "babel-plugin-styled-components",
          {
            "displayName": true
          }
        ],
        "babel-plugin-react-docgen"
      ],
    presets: ['@babel/preset-env', '@babel/preset-react']
};
