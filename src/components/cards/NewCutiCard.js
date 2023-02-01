import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";

// Styles & Icons
import { CalendarRange } from "lucide-react-native";
import { HStack, Icon, Skeleton, Text, VStack } from "native-base";

export default function NewCutiCard({ cuti }) {
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
				{useCapitalize(`${cuti?.keterangan}`)}
			</Text>
			<VStack space={1}>
				<Skeleton h='24px' rounded='lg' isLoaded={cuti}>
					<HStack alignItems='center' space={2}>
						<Icon as={<CalendarRange size={16} />} color='cyan.500' />
						<Text>{`${useDate({ date: cuti?.mulaiCuti })} - ${useDate({ date: cuti?.selesaiCuti })}`}</Text>
					</HStack>
				</Skeleton>
			</VStack>
		</VStack>
	);
}
