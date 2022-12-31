// Styles & Icons
import { FileKey2 } from "lucide-react-native";
import { Flex, Box, HStack, Icon, ScrollView, Text, VStack } from "native-base";

// Constants
import HomeMenu from "constants/HomeMenu";

export default function MenuList() {
	return (
		<Flex w='full'>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<HStack space={2}>
					{HomeMenu.map((menu, i) => (
						<Box
							key={i}
							bg='white'
							alignItems='center'
							justifyContent='center'
							boxSize={115}
							rounded='lg'
							borderWidth={1}
							borderColor='trueGray.300'
							_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
						>
							<VStack alignItems='center' space={2}>
								<Icon as={<FileKey2 size={45} />} color='cyan.500' />
								<Text fontSize='xs' fontWeight='semibold'>
									{menu.text}
								</Text>
							</VStack>
						</Box>
					))}
				</HStack>
			</ScrollView>
		</Flex>
	);
}
