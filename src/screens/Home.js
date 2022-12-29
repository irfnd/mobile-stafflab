import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "states/slices/AuthSlice";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Button, Flex, ScrollView, Text, VStack } from "native-base";

export default function Home() {
	const { pegawai } = useSelector(PegawaiSelector);
	const dispatch = useDispatch();

	return (
		<Flex p={8} safeAreaTop>
			<ScrollView>
				<VStack space={4}>
					<Text>Home Page {JSON.stringify(pegawai)}</Text>
					<Button size='lg' onPress={() => dispatch(AuthActions.reset())}>
						Logout
					</Button>
				</VStack>
			</ScrollView>
		</Flex>
	);
}
