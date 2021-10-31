const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./custom-elements/bundler.js", // Entry File
  output: {
    path: path.resolve(__dirname, "dist"), //Output Directory
    filename: "custom-elements/bundle.js", //Output file
  },
};
