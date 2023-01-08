// Styles & Icons
import { Flex, ScrollView, ZStack } from "native-base";

// Components
import DataKontakAkunDetail from "components/details/kontakAkun/DataKontakAkunDetail";
import BaseStagger from "components/staggers/BaseStagger";

export default function KontakAkun() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<DataKontakAkunDetail />
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
