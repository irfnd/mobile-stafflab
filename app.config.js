import "dotenv/config";

module.exports = {
	name: "mobile-stafflab",
	slug: "mobile-stafflab",
	version: "1.0.0",
	owner: "irfnd",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: { image: "./assets/splash.png", resizeMode: "cover" },
	updates: { fallbackToCacheTimeout: 0 },
	assetBundlePatterns: ["**/*"],
	ios: { supportsTablet: true },
	android: { adaptiveIcon: { foregroundImage: "./assets/adaptive-icon.png", backgroundColor: "#FFFFFF" } },
	web: { favicon: "./assets/favicon.png" },
	extra: { eas: { projectId: "3b4d6063-eca5-467c-adef-2153401248a7" } },
	packagerOpts: { config: "metro.config.js" },
};
