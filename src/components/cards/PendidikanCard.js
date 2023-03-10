import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Building2, CalendarCheck2, ExternalLink, GraduationCap, Lightbulb } from "lucide-react-native";
import { Button, Divider, HStack, Icon, Skeleton, Text, VStack, useDisclose } from "native-base";

// Components
import DokumenModal from "components/modals/DokumenModal";

export default function PendidikanCard({ pendidikan }) {
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const { ijazah, transkrip } = pendidikan.dokumen;
	const dokumenPendidikan = dokumen?.filter((file) => file.kategori === "pendidikan" && (file.id === ijazah || file.id === transkrip));
	const isLoaded = useSkeleton();
	const downloadDisclosure = useDisclose();

	return (
		<>
			<Skeleton h={130} rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
				<VStack space={4}>
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
							{pendidikan?.jenjang}
						</Text>

						<Divider />

						{/* Instansi Pendidikan */}
						<VStack space={1}>
							<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<Text fontSize='md' fontWeight='semibold'>
									Instansi Pendidikan
								</Text>
							</Skeleton>
							<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<HStack alignItems='center' space={2}>
									<Icon as={<Building2 size={16} />} color='cyan.500' />
									<Text>{pendidikan?.nama}</Text>
								</HStack>
							</Skeleton>
						</VStack>

						<Divider />

						{/* Jurusan/Program Studi */}
						<VStack space={1}>
							<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<Text fontSize='md' fontWeight='semibold'>
									Jurusan/Program Studi
								</Text>
							</Skeleton>
							<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<HStack alignItems='center' space={2}>
									<Icon as={<Lightbulb size={16} />} color='cyan.500' />
									<Text>{pendidikan?.jurusan}</Text>
								</HStack>
							</Skeleton>
						</VStack>

						<Divider />

						{/* Tahun Masuk & Lulus */}
						<VStack space={1}>
							<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<Text fontSize='md' fontWeight='semibold'>
									Tahun Masuk & Lulus
								</Text>
							</Skeleton>
							<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<HStack alignItems='center' space={2}>
									<Icon as={<CalendarCheck2 size={16} />} color='cyan.500' />
									<Text>
										{pendidikan?.tahunMasuk} - {pendidikan?.tahunLulus}
									</Text>
								</HStack>
							</Skeleton>
						</VStack>

						<Divider />

						{/* Gelar Akademis */}
						<VStack space={1}>
							<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<Text fontSize='md' fontWeight='semibold'>
									Gelar Akademis
								</Text>
							</Skeleton>
							<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<HStack alignItems='center' space={2}>
									<Icon as={<GraduationCap size={16} />} color='cyan.500' />
									<Text>{pendidikan?.gelar || "-"}</Text>
								</HStack>
							</Skeleton>
						</VStack>

						<Divider />

						{/* Dokumen */}
						<VStack>
							<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenPendidikan}>
								<Button
									colorScheme='cyan'
									variant='solid'
									rounded='md'
									leftIcon={<Icon as={<ExternalLink size={18} />} mr={2} />}
									_text={{ fontWeight: "semibold" }}
									onPress={downloadDisclosure.onOpen}
								>
									Lihat Dokumen
								</Button>
							</Skeleton>
						</VStack>
					</VStack>
				</VStack>
			</Skeleton>
			<DokumenModal disclosure={downloadDisclosure} files={dokumenPendidikan} screen='pendidikan' />
		</>
	);
}
