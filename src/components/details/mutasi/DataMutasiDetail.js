import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import MutasiCard from "components/cards/MutasiCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function DataMutasiDetail() {
	const mutasi = useSelector(PegawaiSelector.mutasi.selectAll);
	const isLoaded = useSkeleton();

	return (
		<VStack h='full' p={8}>
			<VStack>
				<Skeleton h={100} rounded='lg' isLoaded={isLoaded && mutasi}>
					<VStack space={4}>
						{isLoaded && mutasi.length !== 0 ? (
							mutasi?.map((item) => <MutasiCard key={item.id} mutasi={item} />)
						) : (
							<RecentEmptyCard screen='riwayat mutasi' />
						)}
					</VStack>
				</Skeleton>
			</VStack>
		</VStack>
	);
}
