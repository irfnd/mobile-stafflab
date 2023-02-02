import useCapitalize from "helpers/hooks/useCapitalize";

// Styles & Icons
import { FileSearch2 } from "lucide-react-native";
import { HStack, Icon, Text, VStack } from "native-base";

export default function RecentEmptyCard({ screen }) {
	return (
		<VStack
			bg='white'
			p={6}
			rounded='lg'
			borderWidth={1}
			borderColor='trueGray.300'
			_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
			space={2}
		>
			<Text fontSize='md' fontWeight='semibold' w='full' isTruncated>
				{useCapitalize(`data ${screen} kosong!`)}
			</Text>
			<VStack space={1}>
				<HStack alignItems='center' space={2}>
					<Icon as={<FileSearch2 size={16} />} color='cyan.500' />
					<Text>Saat ini data belum tersedia.</Text>
				</HStack>
			</VStack>
		</VStack>
	);
}
