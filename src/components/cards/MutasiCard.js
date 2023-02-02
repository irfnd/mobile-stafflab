import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";
import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import { PerusahaanSelector } from "states/slices/PerusahaanSlice";

// Styles & Icons
import { Award, Building2, CalendarClock, FileBadge, Network, Pocket, Tags } from "lucide-react-native";
import { Button, Divider, HStack, Icon, Skeleton, Text, VStack, useDisclose } from "native-base";

// Components
import DokumenModal from "components/modals/DokumenModal";

export default function MutasiCard({ mutasi }) {
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const dokumenMutasiId = mutasi?.dokumen?.files?.map((el) => el.id);
	const dokumenMutasi = dokumen?.filter((file) => file.kategori === "mutasi" && dokumenMutasiId?.includes(file.id));
	const fromTipe = useSelector((state) => PerusahaanSelector.tipePegawai.selectById(state, mutasi?.detail?.tipe?.from));
	const toTipe = useSelector((state) => PerusahaanSelector.tipePegawai.selectById(state, mutasi?.detail?.tipe?.to));
	const fromStatus = useSelector((state) => PerusahaanSelector.statusPegawai.selectById(state, mutasi?.detail?.status?.from));
	const toStatus = useSelector((state) => PerusahaanSelector.statusPegawai.selectById(state, mutasi?.detail?.status?.to));
	const fromInstansi = useSelector((state) => PerusahaanSelector.instansi.selectById(state, mutasi?.detail?.instansi?.from));
	const toInstansi = useSelector((state) => PerusahaanSelector.instansi.selectById(state, mutasi?.detail?.instansi?.to));
	const fromDivisi = useSelector((state) => PerusahaanSelector.divisi.selectById(state, mutasi?.detail?.divisi?.from));
	const toDivisi = useSelector((state) => PerusahaanSelector.divisi.selectById(state, mutasi?.detail?.divisi?.from));
	const fromJabatan = useSelector((state) => PerusahaanSelector.jabatan.selectById(state, mutasi?.detail?.jabatan?.from));
	const toJabatan = useSelector((state) => PerusahaanSelector.jabatan.selectById(state, mutasi?.detail?.jabatan?.to));
	const fromGolongan = useSelector((state) => PerusahaanSelector.golongan.selectById(state, mutasi?.detail?.golongan?.from));
	const toGolongan = useSelector((state) => PerusahaanSelector.golongan.selectById(state, mutasi?.detail?.golongan?.to));
	const isLoaded = useSkeleton();
	const downloadDisclosure = useDisclose();

	return (
		<>
			<Skeleton h={130} rounded='lg' isLoaded={isLoaded}>
				<VStack
					bg='white'
					p={6}
					rounded='lg'
					borderWidth={1}
					borderColor='trueGray.300'
					_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
					space={3}
				>
					<Text fontSize='lg' fontWeight='semibold' w='full' isTruncated>
						{useCapitalize(`Mutasi ${mutasi?.jenisMutasi}`)}
					</Text>

					<Divider />

					<VStack space={1}>
						<Skeleton h={26} rounded='lg' isLoaded={isLoaded}>
							<Text fontSize='md' fontWeight='semibold'>
								Tanggal Mutasi
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<CalendarClock size={16} />} color='cyan.500' />
								<Text>{useDate({ date: mutasi?.tanggalMutasi })}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={1}>
						<Skeleton h={26} rounded='lg' isLoaded={isLoaded}>
							<Text fontSize='md' fontWeight='semibold'>
								Detail Mutasi
							</Text>
						</Skeleton>

						{/* Tipe */}
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Tags size={16} />} color='cyan.500' />
								{fromTipe && toTipe && <DynamicDetailMutasi from={fromTipe} to={toTipe} />}
							</HStack>
						</Skeleton>

						{/* Status */}
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<FileBadge size={16} />} color='cyan.500' />
								{fromStatus && toStatus && <DynamicDetailMutasi from={fromStatus} to={toStatus} />}
							</HStack>
						</Skeleton>

						{/* Insansi */}
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Building2 size={16} />} color='cyan.500' />
								{fromInstansi && toInstansi && <DynamicDetailMutasi from={fromInstansi} to={toInstansi} />}
							</HStack>
						</Skeleton>

						{/* Divisi */}
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Network size={16} />} color='cyan.500' />
								{fromDivisi && toDivisi && <DynamicDetailMutasi from={fromDivisi} to={toDivisi} />}
							</HStack>
						</Skeleton>

						{/* Jabatan */}
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Award size={16} />} color='cyan.500' />
								{fromJabatan && toJabatan && <DynamicDetailMutasi from={fromJabatan} to={toJabatan} />}
							</HStack>
						</Skeleton>

						{/* Golongan */}
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Pocket size={16} />} color='cyan.500' />
								{fromGolongan && toGolongan && <DynamicDetailMutasi from={fromGolongan} to={toGolongan} />}
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					{/* Download Dokumen */}
					<VStack space={2}>
						<Skeleton h={26} rounded='lg' isLoaded={isLoaded}>
							<Text fontSize='md' fontWeight='semibold'>
								Dokumen Mutasi
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded}>
							<Button
								colorScheme='cyan'
								variant='outline'
								borderColor='cyan.500'
								rounded='md'
								_text={{ fontWeight: "semibold" }}
								onPress={downloadDisclosure.onOpen}
							>
								Unduh Dokumen
							</Button>
						</Skeleton>
					</VStack>
				</VStack>
			</Skeleton>
			<DokumenModal disclosure={downloadDisclosure} files={dokumenMutasi} screen='mutasi' />
		</>
	);
}

function DynamicDetailMutasi({ from, to }) {
	const fromNama = useCapitalize(from?.nama);
	const toNama = useCapitalize(to?.nama);

	if (from !== to)
		return (
			<Text noOfLines={1}>
				{fromNama} &rarr; <Text>{toNama}</Text>
			</Text>
		);
	return <Text noOfLines={1}>{fromNama}</Text>;
}
