// Styles & Icons
import { Flex, ScrollView, ZStack } from "native-base";

// Components
import DataPendidikanDetail from "components/details/pendidikan/DataPendidikanDetail";
import BaseStagger from "components/staggers/BaseStagger";

export default function Pendidikan() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<DataPendidikanDetail />
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
