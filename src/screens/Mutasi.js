// Styles & Icons
import { Flex, ScrollView, ZStack } from "native-base";

// Components
import DataMutasiDetail from "components/details/mutasi/DataMutasiDetail";
import BaseStagger from "components/staggers/BaseStagger";

export default function Mutasi() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<DataMutasiDetail />
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
