import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { AuthSelector } from "states/slices/AuthSlice";

// Screen Navigations
import AuthNavigation from "navigations/AuthNavigation";
import MainNavigation from "navigations/MainNavigation";

// Init
const Stack = createNativeStackNavigator();

export default function BaseNavigation() {
	const { session } = useSelector(AuthSelector);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{session !== null ? (
					<Stack.Screen name='Main' component={MainNavigation} />
				) : (
					<Stack.Screen name='Auth' component={AuthNavigation} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
