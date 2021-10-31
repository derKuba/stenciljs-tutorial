const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./components/init_kuba_button.js", // Entry File
  output: {
    path: path.resolve(__dirname, "dist"), //Output Directory
    filename: "components/bundle.js", //Output file
  },
};
