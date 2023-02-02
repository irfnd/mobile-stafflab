import { useNavigation } from "@react-navigation/native";
import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { ChevronRight } from "lucide-react-native";
import { HStack, Icon, Link, Skeleton, Text, VStack } from "native-base";

// Components
import RecentMutasiList from "components/lists/RecentMutasiList";

export default function RecentMutasiCard() {
	const mutasi = useSelector(PegawaiSelector.mutasi.selectAll);
	const isLoaded = useSkeleton();
	const navigation = useNavigation();

	return (
		<VStack w='full' space={4}>
			<Skeleton h={29} rounded='lg' isLoaded={isLoaded}>
				<HStack alignItems='center' justifyContent='space-between'>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Mutasi
					</Text>
					<Link _text={{ color: "cyan.500" }} onPress={() => navigation.navigate("Mutasi")}>
						<Icon as={<ChevronRight size={20} />} color='cyan.500' />
					</Link>
				</HStack>
			</Skeleton>
			<RecentMutasiList mutasi={mutasi} />
		</VStack>
	);
}
