// Styles & Icons
import { Flex, ScrollView, Text, VStack } from "native-base";

// Components
import BaseStagger from "components/staggers/BaseStagger";

export default function Mutasi() {
	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ScrollView>
				<VStack h='full' space={4} p={8}>
					<Text>Mutasi Screen</Text>
				</VStack>
			</ScrollView>
			<BaseStagger />
		</Flex>
	);
}
