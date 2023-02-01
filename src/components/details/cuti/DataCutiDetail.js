import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, Text, VStack } from "native-base";

// Components
import CutiCard from "components/cards/CutiCard";

export default function DataCutiDetail() {
	const { pegawai, cuti } = useSelector(PegawaiSelector);

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Skeleton h={30} rounded='lg' isLoaded={pegawai && cuti}>
					<Text fontSize='xl' fontWeight='semibold'>
						Riwayat Cuti
					</Text>
				</Skeleton>
				{pegawai && cuti && cuti.map((item) => <CutiCard key={item.id} cuti={item} />)}
			</VStack>
		</VStack>
	);
}
