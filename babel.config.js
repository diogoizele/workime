module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            providers: "./src/providers",
            screens: "./src/screens",
            components: "./src/components",
            styles: "./src/styles",
          },
        },
      ],
    ],
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
