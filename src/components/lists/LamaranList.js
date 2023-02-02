import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import FileCard from "components/cards/FileCard";

export default function LamaranList() {
	const { pegawai } = useSelector(PegawaiSelector.pegawai);
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const dokumenLamaran = dokumen?.filter((file) => file.kategori === "lamaran");
	const isLoaded = useSkeleton();

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={isLoaded && dokumenLamaran}>
					<Text fontSize='xl' fontWeight='semibold'>
						Dokumen Lamaran
					</Text>
				</Skeleton>
				<Skeleton h={130} rounded='lg' isLoaded={isLoaded && dokumenLamaran}>
					<VStack space={2}>
						{dokumenLamaran?.map((file) => (
							<FileCard key={file.id} file={file} withBtn />
						))}
					</VStack>
				</Skeleton>
			</VStack>
		</VStack>
	);
}
