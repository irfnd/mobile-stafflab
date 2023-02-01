import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { VStack, Text, Skeleton } from "native-base";

// Components
import FileCard from "components/cards/FileCard";

export default function LamaranList() {
	const { pegawai, dokumen } = useSelector(PegawaiSelector);
	const dokumenLamaran = dokumen?.filter((file) => file.kategori === "lamaran");

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={pegawai && dokumen && dokumenLamaran}>
					<Text fontSize='xl' fontWeight='semibold'>
						Dokumen Lamaran
					</Text>
				</Skeleton>
				<Skeleton h={130} rounded='lg' isLoaded={pegawai && dokumen && dokumenLamaran}>
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