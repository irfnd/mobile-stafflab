import { useDispatch } from "react-redux";
import { AuthActions } from "states/slices/AuthSlice";

// Styles & Icons
import { Button, Flex, ScrollView, VStack, useColorMode, useColorModeValue } from "native-base";

// Components
import GreetingCard from "components/cards/GreetingCard";

export default function Home() {
	const { toggleColorMode } = useColorMode();
	const dispatch = useDispatch();

	// Color Mode
	const bgContainer = useColorModeValue("gray.100", "trueGray.900");

	return (
		<Flex bg={bgContainer} h='full' safeAreaTop>
			<ScrollView>
				<VStack bg='transparent' space={4} p={8}>
					<GreetingCard />
					<Button size='lg' onPress={toggleColorMode}>
						Toggle Color
					</Button>
					<Button size='lg' onPress={() => dispatch(AuthActions.reset())}>
						Logout
					</Button>
				</VStack>
			</ScrollView>
		</Flex>
	);
}
