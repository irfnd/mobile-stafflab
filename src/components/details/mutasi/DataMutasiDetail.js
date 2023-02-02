import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import MutasiCard from "components/cards/MutasiCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function DataMutasiDetail() {
	const mutasi = useSelector(PegawaiSelector.mutasi.selectAll);
	const isLoaded = useSkeleton();

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={isLoaded && mutasi}>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Mutasi
					</Text>
				</Skeleton>
				<Skeleton h={100} rounded='lg' isLoaded={isLoaded && mutasi}>
					{isLoaded && mutasi.length !== 0 ? (
						mutasi?.map((item) => <MutasiCard key={item.id} mutasi={item} />)
					) : (
						<RecentEmptyCard screen='riwayat mutasi' />
					)}
				</Skeleton>
			</VStack>
		</VStack>
	);
}
