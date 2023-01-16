// Styles & Icons
import { Flex, ScrollView, ZStack } from "native-base";

// Components
import LamaranList from "components/lists/LamaranList";
import BaseStagger from "components/staggers/BaseStagger";

export default function Lamaran() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<LamaranList />
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
