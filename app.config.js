import "dotenv/config";

module.exports = {
	name: "mobile-stafflab",
	slug: "Stafflab Mobile",
	version: "1.0.0",
	owner: "irfnd",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	jsEngine: "hermes",
	splash: { image: "./assets/splash.png", resizeMode: "cover" },
	updates: { fallbackToCacheTimeout: 0 },
	assetBundlePatterns: ["**/*"],
	ios: { supportsTablet: true },
	android: {
		adaptiveIcon: { foregroundImage: "./assets/adaptive-icon.png", backgroundColor: "#FFFFFF" },
		package: "com.stafflab.irfnd",
		versionCode: 1,
	},
	web: { favicon: "./assets/favicon.png" },
	extra: { eas: { projectId: "3b4d6063-eca5-467c-adef-2153401248a7" } },
	packagerOpts: { config: "metro.config.js" },
};
