import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import { useNavigation } from "@react-navigation/native";

// Styles & Icons
import { FileKey2 } from "lucide-react-native";
import { Box, Flex, HStack, Icon, Pressable, ScrollView, Skeleton, Text, VStack, ZStack } from "native-base";

// Constants
import HomeMenu from "constants/HomeMenu";

export default function MenuList() {
	const { pegawai } = useSelector(PegawaiSelector);
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
								<Skeleton boxSize='80px' rounded='lg' isLoaded={pegawai}>
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
