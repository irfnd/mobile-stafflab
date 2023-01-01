// Styles & Icons
import { Flex, HStack, Text, VStack } from "native-base";

export default function RecentDokumenCard() {
	return (
		<VStack w='full' space={4}>
			<HStack alignItems='center' justifyContent='space-between'>
				<Text fontSize='xl' fontWeight='semibold'>
					Dokumen Terbaru
				</Text>
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
				<Text>Dokumen Terbaru</Text>
			</Flex>
		</VStack>
	);
}
