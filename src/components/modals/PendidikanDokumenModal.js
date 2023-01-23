// Styles & Icons
import { Modal, VStack } from "native-base";

// Components
import FileCard from "components/cards/FileCard";

export default function PendidikanDokumenModal({ disclosure, files }) {
	const { isOpen, onClose } = disclosure;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Modal.Content w='sm' py={4}>
				<Modal.Header borderColor='transparent'>Dokumen Berkaitan</Modal.Header>
				<Modal.CloseButton />
				<Modal.Body>
					<VStack space={2}>
						{files?.map((file) => (
							<FileCard key={file.id} file={file} withBtn />
						))}
					</VStack>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	);
}
