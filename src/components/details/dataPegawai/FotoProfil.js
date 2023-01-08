import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Center, Image, Skeleton } from "native-base";

export default function FotoProfil() {
	const { dokumen } = useSelector(PegawaiSelector);
	const foto = dokumen?.filter((file) => file.kategori === "profil")[0];

	return (
		<Center w='full'>
			<Skeleton boxSize={128} rounded='full' isLoaded={dokumen && foto}>
				<Image size='xl' alt='Foto Profil' source={{ uri: foto?.detail?.publicUrl }} rounded='full' />
			</Skeleton>
		</Center>
	);
}
