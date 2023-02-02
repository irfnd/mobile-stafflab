import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import FileCard from "components/cards/FileCard";

export default function DataDokumen() {
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const dokumenPribadi = dokumen?.filter((file) => file.kategori === "pribadi");
	const isLoaded = useSkeleton();

	return (
		<VStack space={4}>
			<Skeleton h={30} rounded='lg' isLoaded={isLoaded && dokumenPribadi}>
				<Text fontSize='xl' fontWeight='semibold'>
					Dokumen Berkaitan
				</Text>
			</Skeleton>
			<Skeleton h={130} rounded='lg' isLoaded={isLoaded && dokumenPribadi}>
				<VStack space={2}>
					{dokumenPribadi?.map((file) => (
						<FileCard key={file.id} file={file} withBtn />
					))}
				</VStack>
			</Skeleton>
		</VStack>
	);
}
