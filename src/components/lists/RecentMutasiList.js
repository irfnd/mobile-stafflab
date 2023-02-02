import useSkeleton from "helpers/hooks/useSkeleton";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import NewMutasiCard from "components/cards/NewMutasiCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function RecentMutasiList({ mutasi }) {
	const isLoaded = useSkeleton();

	return (
		<Skeleton h={100} rounded='lg' isLoaded={isLoaded && mutasi}>
			<VStack space={2}>
				{mutasi?.length !== 0 ? (
					mutasi?.slice(0, 5).map((item) => <NewMutasiCard key={item.id} mutasi={item} />)
				) : (
					<RecentEmptyCard screen='riwayat mutasi' />
				)}
			</VStack>
		</Skeleton>
	);
}
