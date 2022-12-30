import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom Hooks
import usePegawai from "helpers/hooks/usePegawai";
import usePerusahaan from "helpers/hooks/usePerusahaan";

// Styles
import { useColorModeValue } from "native-base";

// Screens
import Home from "screens/Home";

// Init
const Stack = createNativeStackNavigator();

export default function MainNavigation() {
	usePerusahaan();
	usePegawai();

	// Color Mode
	const statusBarColor = useColorModeValue("dark", "light");

	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} options={{ headerShown: false, statusBarStyle: statusBarColor }} />
		</Stack.Navigator>
	);
}
