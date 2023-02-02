import useSkeleton from "helpers/hooks/useSkeleton";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import NewCutiCard from "components/cards/NewCutiCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function RecentCutiList({ cuti }) {
	const isLoaded = useSkeleton();

	return (
		<Skeleton h={100} rounded='lg' isLoaded={isLoaded && cuti}>
			<VStack space={2}>
				{cuti?.length !== 0 ? (
					cuti?.slice(0, 5).map((item) => <NewCutiCard key={item.id} cuti={item} />)
				) : (
					<RecentEmptyCard screen='riwayat cuti' />
				)}
			</VStack>
		</Skeleton>
	);
}
