import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import PendidikanCard from "components/cards/PendidikanCard";

export default function DataPendidikanDetail() {
	const { pegawai, pendidikan } = useSelector(PegawaiSelector);

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={pegawai && pendidikan}>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Pendidikan
					</Text>
				</Skeleton>
				{pegawai && pendidikan && pendidikan.map((item) => <PendidikanCard key={item.id} pendidikan={item} />)}
			</VStack>
		</VStack>
	);
}
