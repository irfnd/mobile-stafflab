import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import PendidikanCard from "components/cards/PendidikanCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function DataPendidikanDetail() {
	const pendidikan = useSelector(PegawaiSelector.pendidikan.selectAll);
	const isLoaded = useSkeleton();

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={isLoaded && pendidikan}>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Pendidikan
					</Text>
				</Skeleton>
				<Skeleton h={100} rounded='lg' isLoaded={isLoaded && pendidikan}>
					{isLoaded && pendidikan.length !== 0 ? (
						pendidikan?.map((item) => <PendidikanCard key={item.id} pendidikan={item} />)
					) : (
						<RecentEmptyCard screen='riwayat pendidikan' />
					)}
				</Skeleton>
			</VStack>
		</VStack>
	);
}
