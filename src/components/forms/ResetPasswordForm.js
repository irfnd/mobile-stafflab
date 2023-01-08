// Styles & Icons
import { VStack } from "native-base";

// Components
import Input from "components/inputs/Input";

export default function ResetPasswordForm() {
	return (
		<VStack w='full' space={4}>
			<Input name='password' type='password' label='Password Baru' placeholder='Masukan password baru' size='lg' isRequired />
			<Input name='confirm' type='password' label='Konfirmasi Password' placeholder='Konfirmasi password baru' size='lg' isRequired />
		</VStack>
	);
}
