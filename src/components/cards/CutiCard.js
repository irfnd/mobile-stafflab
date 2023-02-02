import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";
import useSkeleton from "helpers/hooks/useSkeleton";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { CalendarRange, FileCheck, FileText } from "lucide-react-native";
import { Button, Divider, HStack, Icon, Skeleton, Text, VStack, useDisclose } from "native-base";

// Components
import DokumenModal from "components/modals/DokumenModal";

export default function CutiCard({ cuti, screen = "cuti" }) {
	const { pegawai } = useSelector(PegawaiSelector.pegawai);
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const dokumenCuti = dokumen?.filter((item) => item.kategori === "cuti");
	const downloadDisclosure = useDisclose();
	const isLoaded = useSkeleton();

	return (
		<>
			<Skeleton h={130} rounded='lg' isLoaded={isLoaded && dokumenCuti}>
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
						{useCapitalize(pegawai?.nama)}
					</Text>

					<Divider />

					<VStack space={1}>
						<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenCuti}>
							<Text fontSize='md' fontWeight='semibold'>
								Tanggal Cuti
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenCuti}>
							<HStack alignItems='center' space={2}>
								<Icon as={<CalendarRange size={16} />} color='cyan.500' />
								<Text>{`${useDate({ date: cuti?.mulaiCuti })} - ${useDate({ date: cuti?.selesaiCuti })}`}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={1}>
						<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenCuti}>
							<Text fontSize='md' fontWeight='semibold'>
								Keterangan
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenCuti}>
							<HStack alignItems='center' space={2}>
								<Icon as={<FileText size={16} />} color='cyan.500' />
								<Text>{cuti?.keterangan}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					{screen !== "cuti" && (
						<>
							<Divider />
							<VStack space={1}>
								<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenCuti}>
									<Text fontSize='md' fontWeight='semibold'>
										Diterima
									</Text>
								</Skeleton>
								<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenCuti}>
									<HStack alignItems='center' space={2}>
										<Icon as={<FileCheck size={16} />} color='cyan.500' />
										<Text>{cuti?.diterima ? "Cuti Diterima" : "Menunggu Persetujuan"}</Text>
									</HStack>
								</Skeleton>
							</VStack>
						</>
					)}

					{/* Download Dokumen */}
					{screen === "cuti" && (
						<>
							<Divider />
							<VStack space={2}>
								<Skeleton h={26} rounded='lg' isLoaded={isLoaded && dokumenCuti}>
									<Text fontSize='md' fontWeight='semibold'>
										Dokumen Cuti
									</Text>
								</Skeleton>
								<Skeleton h='24px' rounded='lg' isLoaded={isLoaded && dokumenCuti}>
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
						</>
					)}
				</VStack>
			</Skeleton>
			<DokumenModal disclosure={downloadDisclosure} files={dokumenCuti} screen='cuti' />
		</>
	);
}
