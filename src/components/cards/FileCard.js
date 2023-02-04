import * as FileSystem from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";
import useCapitalize from "helpers/hooks/useCapitalize";
import useDate from "helpers/hooks/useDate";
import { useState } from "react";
import * as mime from "react-native-mime-types";
import { useSelector } from "react-redux";
import { AuthSelector } from "states/slices/AuthSlice";

// Styles & Icons
import { DownloadCloud, FileBadge, FileClock } from "lucide-react-native";
import { Button, HStack, Icon, Text, VStack, useToast } from "native-base";

// Components
import BaseAlert from "components/alerts/BaseAlert";

export default function FileCard({ file, withBtn = false, onClose = null }) {
	const { session } = useSelector(AuthSelector);
	const [loading, setLoading] = useState(false);

	const toast = useToast();
	const fileDir = FileSystem.documentDirectory;

	const saveFile = async (fileUri, fileName) => {
		try {
			const fileString = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
			const downloads = StorageAccessFramework.getUriForDirectoryInRoot("Downloads");
			const { granted, directoryUri } = await StorageAccessFramework.requestDirectoryPermissionsAsync(downloads);
			if (!granted) throw new Error("Pilih folder untuk mengunduh file!");
			const uri = await StorageAccessFramework.createFileAsync(directoryUri, fileName.split(".").shift(), mime.lookup(fileName));
			await FileSystem.writeAsStringAsync(uri, fileString, { encoding: FileSystem.EncodingType.Base64 });
		} catch (err) {
			throw err;
		}
	};

	const onDownload = async (path) => {
		setLoading(true);
		try {
			const fileURL = `${process.env.SUPABASE_FILES_URL}/dokumen/${encodeURI(path)}`;
			const downloadFile = FileSystem.createDownloadResumable(fileURL, fileDir + path.split("/").pop(), {
				headers: { authorization: `Bearer ${session.access_token}` },
			});
			const { uri } = await downloadFile.downloadAsync();
			await saveFile(uri, path.split("/").pop());
			setLoading(false);
			if (onClose) onClose();
			toast.show({
				placement: "top",
				duration: 3000,
				render: ({ id }) => (
					<BaseAlert
						props={{
							toast,
							id,
							status: "success",
							variant: "left-accent",
							title: "Berhasil mengunduh!",
							description: "File Anda sudah tersimpan.",
							isCloseable: true,
						}}
					/>
				),
			});
		} catch (err) {
			setLoading(false);
			toast.show({
				placement: "top",
				duration: 3000,
				render: ({ id }) => (
					<BaseAlert
						props={{
							toast,
							id,
							status: "error",
							variant: "left-accent",
							title: "Gagal mengunduh!",
							description: err.message,
							isCloseable: true,
						}}
					/>
				),
			});
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
				<Text>{useDate({ date: file?.createdAt || file?.uploadedAt, type: "datetime" })}</Text>
			</HStack>
			{withBtn && (
				<Button
					isLoading={loading}
					isLoadingText='Mengunduh'
					colorScheme='cyan'
					variant='solid'
					rounded='md'
					mt={2}
					leftIcon={<Icon as={<DownloadCloud size={18} />} mr={2} />}
					_text={{ fontWeight: "semibold" }}
					onPress={() => onDownload(file?.detail?.path)}
				>
					Unduh Dokumen
				</Button>
			)}
		</VStack>
	);
}
