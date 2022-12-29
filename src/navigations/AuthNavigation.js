import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from "screens/Login";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={Login} options={{ statusBarColor: "transparent", statusBarTranslucent: true }} />
		</Stack.Navigator>
	);
}
