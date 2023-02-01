import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Skeleton, VStack } from "native-base";

// Components
import NewCutiCard from "components/cards/NewCutiCard";

export default function RecentCutiList() {
	const { cuti } = useSelector(PegawaiSelector);

	return (
		<Skeleton h={100} rounded='lg' isLoaded={cuti}>
			<VStack space={4}>{cuti && cuti.slice(0, 4).map((item) => <NewCutiCard key={item.id} cuti={item} />)}</VStack>
		</Skeleton>
	);
}
