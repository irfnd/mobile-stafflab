import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { AuthSelector } from "states/slices/AuthSlice";

// Screen Navigations
import MainNavigation from "navigations/MainNavigation";
import Login from "screens/Login";

// Init
const Stack = createNativeStackNavigator();

export default function BaseNavigation() {
	const { session } = useSelector(AuthSelector);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: "transparent", statusBarTranslucent: true }}>
				{session !== null ? (
					<Stack.Screen name='Main' component={MainNavigation} />
				) : (
					<Stack.Screen name='Login' component={Login} options={{ statusBarStyle: "light" }} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
