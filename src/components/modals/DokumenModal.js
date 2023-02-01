import useCapitalize from "helpers/hooks/useCapitalize";

// Styles & Icons
import { Modal, VStack } from "native-base";

// Components
import FileCard from "components/cards/FileCard";

export default function DokumenModal({ disclosure, files, screen }) {
	const { isOpen, onClose } = disclosure;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Modal.Content w='sm' py={4}>
				<Modal.Header borderColor='transparent'>{useCapitalize(`Dokumen ${screen}`)}</Modal.Header>
				<Modal.CloseButton />
				<Modal.Body py={0} mb={4} px={4}>
					<VStack space={2}>
						{files?.map((file) => (
							<FileCard key={file.id} file={file} withBtn onClose={onClose} />
						))}
					</VStack>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	);
}
