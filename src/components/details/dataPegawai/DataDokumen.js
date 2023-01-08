import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import FileCard from "components/cards/FileCard";

export default function DataDokumen() {
	const { pegawai, dokumen } = useSelector(PegawaiSelector);
	const dokumenPribadi = dokumen?.filter((file) => file.kategori === "pribadi");

	return (
		<VStack space={4}>
			<Skeleton h={30} rounded='lg' isLoaded={pegawai && dokumen && dokumenPribadi}>
				<Text fontSize='xl' fontWeight='semibold'>
					Dokumen Berkaitan
				</Text>
			</Skeleton>
			<Skeleton h={130} rounded='lg' isLoaded={pegawai && dokumen && dokumenPribadi}>
				<VStack space={2}>
					{dokumenPribadi?.map((file) => (
						<FileCard key={file.id} file={file} withBtn />
					))}
				</VStack>
			</Skeleton>
		</VStack>
	);
}
