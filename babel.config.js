const moduleResolver = {
	alias: {
		assets: "./assets",
		components: "./src/components",
		constants: "./src/constants",
		helpers: "./src/helpers",
		navigations: "./src/navigations",
		screens: "./src/screens",
		states: "./src/states",
		styles: "./src/styles",
	},
};

module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [["module-resolver", moduleResolver], "react-native-reanimated/plugin", "transform-inline-environment-variables"],
	};
};
