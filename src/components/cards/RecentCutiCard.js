import { useNavigation } from "@react-navigation/native";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import { useSelector } from "react-redux";

// Styles & Icons
import { ChevronRight } from "lucide-react-native";
import { HStack, Icon, Link, Text, VStack, Skeleton } from "native-base";

// Components
import RecentCutiList from "components/lists/RecentCutiList";

export default function RecentCutiCard() {
	const { pegawai, mutasi } = useSelector(PegawaiSelector);
	const navigation = useNavigation();

	return (
		<VStack w='full' space={4}>
			<Skeleton h={29} rounded='lg' isLoaded={pegawai && mutasi}>
				<HStack alignItems='center' justifyContent='space-between'>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Cuti
					</Text>
					<Link _text={{ color: "cyan.500" }} onPress={() => navigation.navigate("Mutasi")}>
						<Icon as={<ChevronRight size={20} />} color='cyan.500' />
					</Link>
				</HStack>
			</Skeleton>
			<RecentCutiList />
		</VStack>
	);
}
