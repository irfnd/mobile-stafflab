import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import useDate from "helpers/hooks/useDate";

// Styles & Icons
import { VStack, HStack, Text, Skeleton, Divider, Icon } from "native-base";
import { Building2, Lightbulb, CalendarCheck2, GraduationCap } from "lucide-react-native";

export default function PendidikanCard({ pendidikan }) {
	const { dokumen } = useSelector(PegawaiSelector);
	const { ijazah, transkrip } = pendidikan;
	const dokumenPendidikan = dokumen?.filter((file) => file.kategori === "pendidikan" && (file.id === ijazah || file.id === transkrip));

	return (
		<Skeleton h={130} rounded='lg' isLoaded={pendidikan && dokumen}>
			<VStack space={4}>
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
						<Skeleton h={26} rounded='lg' isLoaded={pendidikan && dokumen}>
							<Text fontSize='md' fontWeight='semibold'>
								Jenjang Pendidikan
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={pendidikan && dokumen}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Building2 size={16} />} color='cyan.500' />
								<Text>{pendidikan?.jenjang}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={2}>
						<Skeleton h={26} rounded='lg' isLoaded={pendidikan && dokumen}>
							<Text fontSize='md' fontWeight='semibold'>
								Nama Instansi
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={pendidikan && dokumen}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Building2 size={16} />} color='cyan.500' />
								<Text>{pendidikan?.nama}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={2}>
						<Skeleton h={26} rounded='lg' isLoaded={pendidikan && dokumen}>
							<Text fontSize='md' fontWeight='semibold'>
								Jurusan
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={pendidikan && dokumen}>
							<HStack alignItems='center' space={2}>
								<Icon as={<Lightbulb size={16} />} color='cyan.500' />
								<Text>{pendidikan?.jurusan}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={2}>
						<Skeleton h={26} rounded='lg' isLoaded={pendidikan && dokumen}>
							<Text fontSize='md' fontWeight='semibold'>
								Tahun Masuk & Lulus
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={pendidikan && dokumen}>
							<HStack alignItems='center' space={2}>
								<Icon as={<CalendarCheck2 size={16} />} color='cyan.500' />
								<Text>
									{pendidikan?.tahunMasuk} - {pendidikan?.tahunLulus}
								</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={2}>
						<Skeleton h={26} rounded='lg' isLoaded={pendidikan && dokumen}>
							<Text fontSize='md' fontWeight='semibold'>
								Gelar
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={pendidikan && dokumen}>
							<HStack alignItems='center' space={2}>
								<Icon as={<GraduationCap size={16} />} color='cyan.500' />
								<Text>{pendidikan?.gelar || "-"}</Text>
							</HStack>
						</Skeleton>
					</VStack>

					<Divider />

					<VStack space={2}>
						<Skeleton h={26} rounded='lg' isLoaded={pendidikan && dokumen}>
							<Text fontSize='md' fontWeight='semibold'>
								Terakhir Diubah
							</Text>
						</Skeleton>
						<Skeleton h='24px' rounded='lg' isLoaded={pendidikan && dokumen}>
							<HStack alignItems='center' space={2}>
								<Icon as={<GraduationCap size={16} />} color='cyan.500' />
								<Text>{useDate({ date: pendidikan?.createdAt, type: "datetime" })}</Text>
							</HStack>
						</Skeleton>
					</VStack>
				</VStack>
			</VStack>
		</Skeleton>
	);
}
