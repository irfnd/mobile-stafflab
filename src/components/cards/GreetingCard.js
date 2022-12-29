import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Flex, HStack, VStack, Text, useColorModeValue, Avatar, Spinner, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

export default function GreetingCard() {
	const { pegawai, dataPribadi, dokumen } = useSelector(PegawaiSelector);
	const avatar = dokumen?.filter((el) => el.kategori === "profil")[0];

	// Color Mode
	const bgCard = useColorModeValue("white", "trueGray.800");

	return (
		<Flex bg={bgCard} p={6} rounded='lg' shadow='md'>
			<VStack space={2}>
				<HStack space={4}>
					{avatar ? (
						<Avatar size='xl' source={{ uri: avatar.detail.publicUrl }} />
					) : (
						<Avatar size='xl' bg='cyan.500'>
							<Spinner size='xl' color={bgCard} />
						</Avatar>
					)}
					<VStack space={1}>
						<Text fontSize='lg' fontWeight='semibold'>
							{pegawai?.nama}
						</Text>
						<VStack>
							<HStack alignItems='center' space={1}>
								<Icon as={<Feather name='hash' />} size={4} color='cyan.500' />
								<Text fontSize='sm'>{pegawai?.nip}</Text>
							</HStack>
							<HStack alignItems='center' space={1}>
								<Icon as={<Feather name='hash' />} size={4} color='cyan.500' />
								<Text fontSize='sm'>{pegawai?.idTipe}</Text>
							</HStack>
						</VStack>
					</VStack>
				</HStack>
				{/* <Text>{JSON.stringify(dataPribadi)}</Text>
				<Text>{JSON.stringify(dokumen)}</Text> */}
			</VStack>
		</Flex>
	);
}
