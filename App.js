import useAuth from "helpers/hooks/useAuth";
import useSplashScreen from "helpers/hooks/useSplashScreen";

// States
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "states/store";

// Styles & Fonts
import { NativeBaseProvider } from "native-base";
import colorModeManager from "styles/colorModeManager";
import config from "styles/foundations/config";
import theme from "styles/theme";

// Components
import BaseNavigation from "navigations/BaseNavigation";

export default function App() {
	const { screenReady } = useSplashScreen();
	useAuth();

	if (!screenReady) return null;
	return (
		<NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BaseNavigation />
				</PersistGate>
			</Provider>
		</NativeBaseProvider>
	);
}
