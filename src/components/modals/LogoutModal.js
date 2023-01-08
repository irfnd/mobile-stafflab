import { useDispatch } from "react-redux";
import { AuthActions } from "states/slices/AuthSlice";

// Styles & Icons
import { Button, Modal, Text, HStack } from "native-base";

export default function LogoutModal({ disclosure }) {
	const { isOpen, onClose } = disclosure;
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(AuthActions.reset());
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Modal.Content w='sm' p={4}>
				<Modal.Header borderColor='transparent'>Logout</Modal.Header>
				<Modal.CloseButton />
				<Modal.Body>
					<Text>Apakah Anda yakin ingin Logout?</Text>
				</Modal.Body>
				<Modal.Footer borderColor='transparent'>
					<HStack space={2}>
						<Button colorScheme='red' w='50%' onPress={onLogout}>
							Logout
						</Button>
						<Button variant='outline' borderColor='cyan.500' w='50%' onPress={onClose}>
							Batal
						</Button>
					</HStack>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	);
}
