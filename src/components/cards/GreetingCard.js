import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import { PerusahaanSelector } from "states/slices/PerusahaanSlice";

// Styles & Icons
import { CheckCircle, Hash, UserCheck } from "lucide-react-native";
import { Avatar, Badge, Box, Flex, HStack, Icon, Spinner, Text, VStack, useColorModeValue } from "native-base";

export default function GreetingCard() {
	const { pegawai, dokumen } = useSelector(PegawaiSelector);
	const tipePegawai = useSelector((state) => PerusahaanSelector.tipePegawai.selectById(state, pegawai?.idTipe));
	const statusPegawai = useSelector((state) => PerusahaanSelector.statusPegawai.selectById(state, pegawai?.idStatus));
	const instansi = useSelector((state) => PerusahaanSelector.instansi.selectById(state, pegawai?.idInstansi));
	const divisi = useSelector((state) => PerusahaanSelector.divisi.selectById(state, pegawai?.idDivisi));
	const jabatan = useSelector((state) => PerusahaanSelector.jabatan.selectById(state, pegawai?.idJabatan));
	const golongan = useSelector((state) => PerusahaanSelector.golongan.selectById(state, pegawai?.idGolongan));
	const avatar = dokumen?.filter((el) => el.kategori === "profil")[0];

	// Color Mode
	const bgCard = useColorModeValue("white", "trueGray.800");
	const bgBadgeAktif = useColorModeValue("success.500", "success.500:alpha.70");

	return (
		<Flex bg={bgCard} p={6} rounded='lg' shadow={1}>
			<VStack space={2}>
				<HStack alignItems='center' space={6}>
					<Box alignItems='center'>
						{avatar ? (
							<Avatar size='xl' source={{ uri: avatar?.detail?.publicUrl }} />
						) : (
							<Avatar size='xl' bg='cyan.500'>
								<Spinner size='lg' color={bgCard} />
							</Avatar>
						)}
						<Badge position='absolute' bg={bgBadgeAktif} bottom={-5} rounded='lg'>
							<HStack alignItems='center' space={1}>
								<Icon as={<CheckCircle size={14} />} color='white' />
								<Text fontSize='xs' fontWeight='medium' color='white'>
									{statusPegawai?.nama}
								</Text>
							</HStack>
						</Badge>
					</Box>
					<VStack space={2}>
						<Text fontSize='lg' fontWeight='semibold'>
							{pegawai?.nama}
						</Text>
						<VStack space={1}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Hash size={16} />} color='cyan.500' />
								<Text fontSize='sm'>{pegawai?.nip}</Text>
							</HStack>
							<HStack alignItems='center' space={2}>
								<Icon as={<UserCheck size={16} />} color='cyan.500' />
								<Text fontSize='sm'>{tipePegawai?.nama}</Text>
							</HStack>
						</VStack>
					</VStack>
				</HStack>
			</VStack>
		</Flex>
	);
}
