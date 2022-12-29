import { createNativeStackNavigator } from "@react-navigation/native-stack";
import usePegawai from "helpers/hooks/usePegawai";

// Styles
import { useColorModeValue } from "native-base";

// Screens
import Home from "screens/Home";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
	usePegawai();

	// Color Mode
	const statusBarColor = useColorModeValue("dark", "light");

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{ statusBarColor: "transparent", statusBarTranslucent: true, statusBarStyle: statusBarColor }}
			/>
		</Stack.Navigator>
	);
}
