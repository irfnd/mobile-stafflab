// Styles & Icons
import { Flex, ScrollView, ZStack } from "native-base";

// Components
import DataCutiDetail from "components/details/cuti/DataCutiDetail";
import BaseStagger from "components/staggers/BaseStagger";

export default function Cuti() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<DataCutiDetail />
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
