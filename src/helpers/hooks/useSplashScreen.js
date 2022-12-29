import { useEffect } from "react";
import useLoadFonts from "helpers/hooks/useLoadFonts";
import * as SplashScreen from "expo-splash-screen";

// Initialize
SplashScreen.preventAutoHideAsync();

export default function useSplashScreen() {
	const { fontsLoaded } = useLoadFonts();

	const hideSplashScreen = async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	};

	useEffect(() => {
		hideSplashScreen();
	}, [fontsLoaded]);

	return { screenReady: fontsLoaded };
}
