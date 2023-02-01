import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import NewMutasiCard from "components/cards/NewMutasiCard";

export default function RecentMutasiList() {
	const { mutasi } = useSelector(PegawaiSelector);

	return (
		<Skeleton h={100} rounded='lg' isLoaded={mutasi}>
			<VStack space={4}>{mutasi && mutasi.slice(0, 4).map((item) => <NewMutasiCard key={item.id} mutasi={item} />)}</VStack>
		</Skeleton>
	);
}
