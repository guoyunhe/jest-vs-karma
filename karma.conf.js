module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "karma-typescript"],
    files: ["src/**/*.ts", "src/**/*.tsx", "test/**/*.ts", "test/**/*.tsx"],
    preprocessors: {
      "**/*.ts": "karma-typescript",
      "**/*.tsx": "karma-typescript",
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromiumHeadless"],
    singleRun: true,
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
    },
  });
};
