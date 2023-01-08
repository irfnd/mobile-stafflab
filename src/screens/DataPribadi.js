// Styles & Icons
import { Flex, ScrollView, ZStack } from "native-base";

// Components
import DataPegawaiDetail from "components/details/dataPegawai/DataPegawaiDetail";
import BaseStagger from "components/staggers/BaseStagger";

export default function DataPribadi() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<DataPegawaiDetail />
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
