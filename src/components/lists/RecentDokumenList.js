import useSkeleton from "helpers/hooks/useSkeleton";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import NewDokumenCard from "components/cards/NewDokumenCard";
import RecentEmptyCard from "components/cards/RecentEmptyCard";

export default function RecentDocumentList({ dokumen }) {
	const isLoaded = useSkeleton();

	return (
		<Skeleton h={100} rounded='lg' isLoaded={isLoaded && dokumen}>
			<VStack space={2}>
				{dokumen?.length !== 0 ? (
					dokumen?.slice(0, 5).map((item) => <NewDokumenCard key={item.id} file={item} />)
				) : (
					<RecentEmptyCard screen='dokumen terbaru' />
				)}
			</VStack>
		</Skeleton>
	);
}
