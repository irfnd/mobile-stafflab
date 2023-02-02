import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { HStack, Skeleton, Text, VStack } from "native-base";

// Components
import RecentDocumentList from "components/lists/RecentDokumenList";

export default function RecentDokumenCard() {
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const isLoaded = useSkeleton();

	return (
		<VStack w='full' space={4}>
			<Skeleton h={29} rounded='lg' isLoaded={isLoaded}>
				<HStack alignItems='center' justifyContent='space-between'>
					<Text fontSize='xl' fontWeight='semibold'>
						Dokumen Terbaru
					</Text>
				</HStack>
			</Skeleton>
			<RecentDocumentList dokumen={dokumen} />
		</VStack>
	);
}
