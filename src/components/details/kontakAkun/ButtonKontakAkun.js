// Styles & Icons
import { Edit } from "lucide-react-native";
import { Button, Icon, useDisclose } from "native-base";

// Components
import ResetPasswordModal from "components/modals/ResetPasswordModal";

export default function ButtonKontakAkun() {
	const resetDisclosure = useDisclose();

	return (
		<>
			<Button size='lg' w='full' leftIcon={<Icon as={<Edit size={20} />} mr={2} />} onPress={resetDisclosure.onOpen}>
				Reset Password
			</Button>
			<ResetPasswordModal disclosure={resetDisclosure} />
		</>
	);
}
