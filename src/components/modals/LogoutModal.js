import { useDispatch } from "react-redux";
import { AuthActions } from "states/slices/AuthSlice";

// Styles & Icons
import { Button, Modal, Text } from "native-base";

export default function LogoutModal({ disclosure }) {
	const { isOpen, onClose } = disclosure;
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(AuthActions.reset());
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Modal.Content w='sm'>
				<Modal.CloseButton />
				<Modal.Header borderColor='transparent'>Logout</Modal.Header>
				<Modal.Body>
					<Text>Apakah Anda yakin ingin Logout?</Text>
				</Modal.Body>
				<Modal.Footer borderColor='transparent'>
					<Button.Group space={2}>
						<Button colorScheme='red' onPress={onLogout}>
							Logout
						</Button>
						<Button variant='ghost' onPress={onClose}>
							Batal
						</Button>
					</Button.Group>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	);
}
