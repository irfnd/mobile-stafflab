import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";

// Styles & Icons
import { CalendarClock } from "lucide-react-native";
import { HStack, Icon, Skeleton, Text, VStack } from "native-base";

export default function NewMutasiCard({ mutasi }) {
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
				{useCapitalize(`Mutasi ${mutasi?.jenisMutasi}`)}
			</Text>
			<VStack space={1}>
				<Skeleton h='24px' rounded='lg' isLoaded={mutasi}>
					<HStack alignItems='center' space={2}>
						<Icon as={<CalendarClock size={16} />} color='cyan.500' />
						<Text>{useDate({ date: mutasi?.tanggalMutasi })}</Text>
					</HStack>
				</Skeleton>
			</VStack>
		</VStack>
	);
}
