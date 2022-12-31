// Styles & Icons
import { Flex, ScrollView, VStack } from "native-base";

// Components
import ProfilCard from "components/cards/ProfilCard";
import MenuList from "components/lists/MenuList";
import BaseStagger from "components/staggers/BaseStagger";

export default function Home() {
	return (
		<Flex bg='trueGray.100' h='full' safeAreaTop _dark={{ bg: "trueGray.900" }}>
			<ScrollView>
				<VStack bg='transparent' h='full' space={4} p={8}>
					<ProfilCard />
					<MenuList />
				</VStack>
			</ScrollView>
			<BaseStagger />
		</Flex>
	);
}
