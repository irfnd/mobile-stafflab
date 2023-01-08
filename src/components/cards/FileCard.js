import * as FileSystem from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";
import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";
import { downloadFile } from "helpers/api/PegawaiApi";

// Styles & Icons
import { FileBadge, FileClock } from "lucide-react-native";
import { HStack, Icon, Text, VStack, Button } from "native-base";

// Components

export default function FileCard({ file, withBtn = false }) {
	const onDownload = async (filePath) => {
		try {
			const downloadFolder = StorageAccessFramework.getUriForDirectoryInRoot("Downloads");
			console.log(downloadFolder);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<VStack
			bg='white'
			p={6}
			space={2}
			rounded='lg'
			borderWidth={1}
			borderColor='trueGray.300'
			_dark={{ bg: "trueGray.800", borderColor: "trueGray.700" }}
		>
			<Text fontSize='md' fontWeight='semibold' w='full' isTruncated>
				{file?.nama}
			</Text>
			<HStack alignItems='center' space={2}>
				<Icon as={<FileBadge size={16} />} color='cyan.500' />
				<Text>Dokumen {useCapitalize(file?.kategori)}</Text>
			</HStack>
			<HStack alignItems='center' space={2}>
				<Icon as={<FileClock size={16} />} color='cyan.500' />
				<Text>{useDate({ date: file?.createdAt, type: "datetime" })}</Text>
			</HStack>
			{withBtn && (
				<Button colorScheme='cyan' mt={2} onPress={() => onDownload(file?.detail?.path)}>
					Unduh Dokumen
				</Button>
			)}
		</VStack>
	);
}
