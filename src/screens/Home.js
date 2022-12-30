// Styles & Icons
import { Flex, ScrollView, VStack, useColorModeValue } from "native-base";

// Components
import GreetingCard from "components/cards/GreetingCard";
import BaseStagger from "components/staggers/BaseStagger";

export default function Home() {
	// Color Mode
	const bgContainer = useColorModeValue("gray.100", "trueGray.900");

	return (
		<Flex bg={bgContainer} h='full' safeAreaTop>
			<ScrollView>
				<VStack bg='transparent' h='full' space={4} p={8}>
					<GreetingCard />
				</VStack>
			</ScrollView>
			<BaseStagger />
		</Flex>
	);
}
