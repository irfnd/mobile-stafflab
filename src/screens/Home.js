// Styles & Icons
import { Flex, ScrollView, VStack, ZStack } from "native-base";

// Components
import ProfilCard from "components/cards/ProfilCard";
import RecentCutiCard from "components/cards/RecentCutiCard";
import RecentMutasiCard from "components/cards/RecentMutasiCard";
import RecentDokumenCard from "components/cards/RecentDokumenCard";
import MenuList from "components/lists/MenuList";
import BaseStagger from "components/staggers/BaseStagger";

export default function Home() {
	return (
		<Flex bg='trueGray.100' h='full' safeAreaTop _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<VStack h='full' space={8} p={8}>
						<ProfilCard />
						<MenuList />
						<RecentMutasiCard />
						<RecentCutiCard />
						<RecentDokumenCard />
					</VStack>
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
