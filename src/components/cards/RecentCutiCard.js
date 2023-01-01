import { useNavigation } from "@react-navigation/native";

// Styles & Icons
import { ChevronRight } from "lucide-react-native";
import { Flex, HStack, Icon, Link, Text, VStack } from "native-base";

export default function RecentCutiCard() {
	const navigation = useNavigation();

	return (
		<VStack w='full' space={4}>
			<HStack alignItems='center' justifyContent='space-between'>
				<Text fontSize='xl' fontWeight='semibold'>
					Riwayat Cuti
				</Text>
				<Link _text={{ color: "cyan.500" }} onPress={() => navigation.navigate("Cuti")}>
					<Icon as={<ChevronRight size={30} />} color='cyan.500' />
				</Link>
			</HStack>
			<Flex
				bg='white'
				p={6}
				w='full'
				rounded='lg'
				borderWidth={1}
				borderColor='trueGray.300'
				_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
			>
				<Text>Cuti Terbaru</Text>
			</Flex>
		</VStack>
	);
}
