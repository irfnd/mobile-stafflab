import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import { PerusahaanSelector } from "states/slices/PerusahaanSlice";

// Styles & Icons
import { Building2, Hash, Network, Pocket, UserCheck } from "lucide-react-native";
import { Avatar, Box, Divider, Flex, HStack, Icon, Skeleton, Text, VStack } from "native-base";

// Components & Illustration
import JabatanIllustration from "assets/illustrations/JabatanIllustration.svg";
import StatusPegawaiBadge from "components/badges/StatusPegawaiBadge";

export default function ProfileCard() {
	const { pegawai, dokumen } = useSelector(PegawaiSelector);
	const tipePegawai = useSelector((state) => PerusahaanSelector.tipePegawai.selectById(state, pegawai?.idTipe));
	const statusPegawai = useSelector((state) => PerusahaanSelector.statusPegawai.selectById(state, pegawai?.idStatus));
	const instansi = useSelector((state) => PerusahaanSelector.instansi.selectById(state, pegawai?.idInstansi));
	const divisi = useSelector((state) => PerusahaanSelector.divisi.selectById(state, pegawai?.idDivisi));
	const jabatan = useSelector((state) => PerusahaanSelector.jabatan.selectById(state, pegawai?.idJabatan));
	const golongan = useSelector((state) => PerusahaanSelector.golongan.selectById(state, pegawai?.idGolongan));
	const avatar = dokumen?.filter((file) => file.kategori === "profil")[0];

	return (
		<Flex
			bg='white'
			p={6}
			w='full'
			rounded='lg'
			borderWidth={1}
			borderColor='trueGray.300'
			_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
		>
			<VStack w='full' space={4}>
				<HStack alignItems='center' justifyContent='space-between' w='full'>
					<Box alignItems='center'>
						<Skeleton
							boxSize='95px'
							rounded='full'
							isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
						>
							<Avatar size='xl' source={{ uri: avatar?.detail?.publicUrl }} />
						</Skeleton>
						{pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar && (
							<StatusPegawaiBadge status={statusPegawai?.nama} />
						)}
					</Box>

					<VStack w='66%' space={2}>
						<Skeleton
							rounded='lg'
							h='28px'
							isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
						>
							<Text fontSize='xl' fontWeight='semibold' noOfLines={1}>
								{pegawai?.nama}
							</Text>
						</Skeleton>
						<VStack space={1}>
							<Skeleton
								rounded='lg'
								h='20px'
								isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
							>
								<HStack alignItems='center' space={2}>
									<Icon as={<Hash size={16} />} color='cyan.500' />
									<Text fontSize='sm'>{pegawai?.nip}</Text>
								</HStack>
							</Skeleton>
							<Skeleton
								rounded='lg'
								h='20px'
								isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
							>
								<HStack alignItems='center' space={2}>
									<Icon as={<UserCheck size={16} />} color='cyan.500' />
									<Text fontSize='sm'>{tipePegawai?.nama}</Text>
								</HStack>
							</Skeleton>
						</VStack>
					</VStack>
				</HStack>

				<Divider />

				<VStack w='full' space={2}>
					<Skeleton
						rounded='lg'
						h='28px'
						isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
					>
						<Text fontSize='xl' fontWeight='semibold' noOfLines={1}>
							{jabatan?.nama}
						</Text>
					</Skeleton>
					<VStack space={1}>
						<Skeleton
							rounded='lg'
							h='20px'
							isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
						>
							<HStack alignItems='center' space={2}>
								<Icon as={<Building2 size={16} />} color='cyan.500' />
								<Text fontSize='sm'>{instansi?.nama}</Text>
							</HStack>
						</Skeleton>
						<Skeleton
							rounded='lg'
							h='20px'
							isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
						>
							<HStack alignItems='center' space={2}>
								<Icon as={<Network size={16} />} color='cyan.500' />
								<Text fontSize='sm'>{divisi?.nama}</Text>
							</HStack>
						</Skeleton>
						<Skeleton
							rounded='lg'
							h='20px'
							isLoaded={pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar}
						>
							<HStack alignItems='center' space={2}>
								<Icon as={<Pocket size={16} />} color='cyan.500' />
								<Text fontSize='sm'>{golongan?.nama}</Text>
							</HStack>
						</Skeleton>
					</VStack>
				</VStack>
			</VStack>

			{pegawai && dokumen && tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan && avatar && (
				<Flex position='absolute' w={150} bottom={-20} right={0}>
					<JabatanIllustration width={150} height={150} />
				</Flex>
			)}
		</Flex>
	);
}
