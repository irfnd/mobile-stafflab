import { useNavigation } from "@react-navigation/native";
import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { FilePlus } from "lucide-react-native";
import { Button, Icon, Skeleton, Text, VStack } from "native-base";

// Components
import CutiCard from "components/cards/CutiCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function DataCutiDetail() {
	const cuti = useSelector(PegawaiSelector.cuti.selectAll);
	const pengajuanCuti = cuti?.filter((item) => item.diterima === false);
	const riwayatCuti = cuti?.filter((item) => item.diterima === true);
	const isLoaded = useSkeleton();
	const navigation = useNavigation();

	return (
		<VStack h='full' space={8} p={8}>
			<Button
				size='lg'
				w='full'
				colorScheme='cyan'
				leftIcon={<Icon as={<FilePlus size={20} />} mr={2} />}
				rounded='md'
				_text={{ fontWeight: "semibold" }}
				onPress={() => navigation.navigate("PengajuanCuti")}
			>
				Ajukan Cuti
			</Button>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={isLoaded && pengajuanCuti}>
					<Text fontSize='xl' fontWeight='semibold'>
						Pengajuan Cuti
					</Text>
				</Skeleton>
				<Skeleton h={100} rounded='lg' isLoaded={isLoaded && pengajuanCuti}>
					{isLoaded && pengajuanCuti.length !== 0 ? (
						pengajuanCuti.map((item) => <CutiCard key={item.id} cuti={item} screen='pengajuan' />)
					) : (
						<RecentEmptyCard screen='pengajuan cuti' />
					)}
				</Skeleton>
			</VStack>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={isLoaded && riwayatCuti}>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Cuti
					</Text>
				</Skeleton>
				<Skeleton h={100} rounded='lg' isLoaded={isLoaded && riwayatCuti}>
					{isLoaded && riwayatCuti.length !== 0 ? (
						riwayatCuti.map((item) => <CutiCard key={item.id} cuti={item} />)
					) : (
						<RecentEmptyCard screen='riwayat cuti' />
					)}
				</Skeleton>
			</VStack>
		</VStack>
	);
}
