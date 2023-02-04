import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import PendidikanCard from "components/cards/PendidikanCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function DataPendidikanDetail() {
	const pendidikan = useSelector(PegawaiSelector.pendidikan.selectAll);
	const isLoaded = useSkeleton();

	return (
		<VStack h='full' p={8}>
			<VStack>
				<Skeleton h={100} rounded='lg' isLoaded={isLoaded && pendidikan}>
					<VStack space={4}>
						{isLoaded && pendidikan.length !== 0 ? (
							pendidikan?.map((item) => <PendidikanCard key={item.id} pendidikan={item} />)
						) : (
							<RecentEmptyCard screen='riwayat pendidikan' />
						)}
					</VStack>
				</Skeleton>
			</VStack>
		</VStack>
	);
}
