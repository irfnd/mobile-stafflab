import { useNavigation } from "@react-navigation/native";
import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Box, Flex, HStack, Pressable, ScrollView, Skeleton, Text, VStack } from "native-base";

// Constants
import HomeMenu from "constants/HomeMenu";

export default function MenuList() {
	const { pegawai } = useSelector(PegawaiSelector.pegawai);
	const isLoaded = useSkeleton();
	const navigation = useNavigation();

	return (
		<Flex w='full'>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<HStack space={3}>
					{HomeMenu.map((menu, i) => (
						<Pressable key={i} onPress={() => navigation.navigate(menu.screen)} disabled={!pegawai}>
							<Box
								bg='white'
								alignItems='center'
								justifyContent='center'
								boxSize={120}
								rounded='lg'
								borderWidth={1}
								borderColor='trueGray.300'
								_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
							>
								<Skeleton boxSize='80px' rounded='lg' isLoaded={isLoaded}>
									<VStack alignItems='center' h='full'>
										<Box>{menu.illustration}</Box>
										<Text position='absolute' fontSize='xs' fontWeight='semibold' bottom={5}>
											{menu.text}
										</Text>
									</VStack>
								</Skeleton>
							</Box>
						</Pressable>
					))}
				</HStack>
			</ScrollView>
		</Flex>
	);
}
