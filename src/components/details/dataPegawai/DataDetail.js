import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Asterisk, Cake, CreditCard, Hash, Heart, MapPin, Verified } from "lucide-react-native";
import { Divider, HStack, Icon, Skeleton, Text, VStack } from "native-base";

// Components

export default function DataDetail() {
	const { pegawai, dataPribadi } = useSelector(PegawaiSelector);

	return (
		<VStack space={4}>
			<Skeleton h={30} rounded='lg' isLoaded={pegawai && dataPribadi}>
				<Text fontSize='xl' fontWeight='semibold'>
					Data Pribadi
				</Text>
			</Skeleton>
			<VStack
				bg='white'
				p={6}
				rounded='lg'
				borderWidth={1}
				borderColor='trueGray.300'
				_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
				space={3}
			>
				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Nomor Induk Keluarga
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<Hash size={16} />} color='cyan.500' />
							<Text>{dataPribadi?.nik}</Text>
						</HStack>
					</Skeleton>
				</VStack>

				<Divider />

				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Nama Lengkap
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<CreditCard size={16} />} color='cyan.500' />
							<Text>{pegawai?.nama}</Text>
						</HStack>
					</Skeleton>
				</VStack>

				<Divider />

				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Tempat Tanggal Lahir
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<Cake size={16} />} color='cyan.500' />
							<Text>
								{dataPribadi?.tempatLahir}, {useDate({ date: dataPribadi?.tanggalLahir })}
							</Text>
						</HStack>
					</Skeleton>
				</VStack>

				<Divider />

				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Jenis Kelamin
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<Asterisk size={16} />} color='cyan.500' />
							<Text>{dataPribadi?.jenisKelamin === "l" ? "Laki-laki" : "Perempuan"}</Text>
						</HStack>
					</Skeleton>
				</VStack>

				<Divider />

				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Agama
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<Verified size={16} />} color='cyan.500' />
							<Text>{useCapitalize(dataPribadi?.agama)}</Text>
						</HStack>
					</Skeleton>
				</VStack>

				<Divider />

				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Status Pernikahan
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<Heart size={16} />} color='cyan.500' />
							<Text>{dataPribadi?.kawin ? "Sudah Menikah" : "Belum Menikah"}</Text>
						</HStack>
					</Skeleton>
				</VStack>

				<Divider />

				<VStack space={1}>
					<Skeleton h={26} rounded='lg' isLoaded={pegawai && dataPribadi}>
						<Text fontSize='md' fontWeight='semibold'>
							Alamat
						</Text>
					</Skeleton>
					<Skeleton h='24px' rounded='lg' isLoaded={pegawai && dataPribadi}>
						<HStack alignItems='center' space={2}>
							<Icon as={<MapPin size={16} />} color='cyan.500' />
							<Text>{dataPribadi?.alamat}</Text>
						</HStack>
					</Skeleton>
				</VStack>
			</VStack>
		</VStack>
	);
}
