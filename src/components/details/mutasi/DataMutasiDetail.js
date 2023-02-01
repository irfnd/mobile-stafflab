import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import MutasiCard from "components/cards/MutasiCard";

export default function DataMutasiDetail() {
	const { pegawai, mutasi } = useSelector(PegawaiSelector);

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={pegawai && mutasi}>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Mutasi
					</Text>
				</Skeleton>
				{pegawai && mutasi && mutasi.map((item) => <MutasiCard key={item.id} mutasi={item} />)}
			</VStack>
		</VStack>
	);
}
