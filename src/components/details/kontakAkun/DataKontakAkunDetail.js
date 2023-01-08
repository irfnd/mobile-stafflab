import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { MailCheck, PhoneCall } from "lucide-react-native";
import { Divider, HStack, Icon, Text, VStack } from "native-base";

// Components
import ButtonKontakAkun from "components/details/kontakAkun/ButtonKontakAkun";

export default function DataKontakAkunDetail() {
	const { pegawai } = useSelector(PegawaiSelector);

	return (
		<VStack h='full' space={8} p={8}>
			<VStack space={4}>
				<Text fontSize='xl' fontWeight='semibold'>
					Kontak & Akun
				</Text>
				<VStack
					bg='white'
					p={6}
					rounded='lg'
					borderWidth={1}
					borderColor='trueGray.300'
					_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
					space={4}
				>
					<VStack space={2}>
						<Text fontSize='md' fontWeight='semibold'>
							Email
						</Text>
						<HStack alignItems='center' space={2}>
							<Icon as={<MailCheck size={16} />} color='cyan.500' />
							<Text>{pegawai?.email}</Text>
						</HStack>
					</VStack>

					<Divider />

					<VStack space={2}>
						<Text fontSize='md' fontWeight='semibold'>
							Nomor Telepon
						</Text>
						<HStack alignItems='center' space={2}>
							<Icon as={<PhoneCall size={16} />} color='cyan.500' />
							<Text>{pegawai?.noTelepon}</Text>
						</HStack>
					</VStack>
				</VStack>
			</VStack>
			<ButtonKontakAkun />
		</VStack>
	);
}
