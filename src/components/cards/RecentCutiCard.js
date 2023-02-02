import { useNavigation } from "@react-navigation/native";
import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { ChevronRight } from "lucide-react-native";
import { HStack, Icon, Link, Skeleton, Text, VStack } from "native-base";

// Components
import RecentCutiList from "components/lists/RecentCutiList";

export default function RecentCutiCard() {
	const cuti = useSelector(PegawaiSelector.cuti.selectAll);
	const cutiDiterima = cuti?.filter((item) => item.diterima === true);
	const isLoaded = useSkeleton();
	const navigation = useNavigation();

	return (
		<VStack w='full' space={4}>
			<Skeleton h={29} rounded='lg' isLoaded={isLoaded && cutiDiterima}>
				<HStack alignItems='center' justifyContent='space-between'>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Cuti
					</Text>
					<Link _text={{ color: "cyan.500" }} onPress={() => navigation.navigate("Cuti")}>
						<Icon as={<ChevronRight size={20} />} color='cyan.500' />
					</Link>
				</HStack>
			</Skeleton>
			<RecentCutiList cuti={cutiDiterima} />
		</VStack>
	);
}
