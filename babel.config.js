module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["expo-router/babel"], ["module-resolver", { alias: { "@": "./src/app", "@Components": "./src/components", "@Data": "./src/data", "@Assets": "./src/assets", "@Services": "./src/services", }, extensions: [".js", ".jsx", ".ts", ".tsx"], },],],
  };
};
