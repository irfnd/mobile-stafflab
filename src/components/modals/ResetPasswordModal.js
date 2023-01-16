import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "helpers/Validations";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Styles & Icons
import { Button, HStack, VStack, Modal, KeyboardAvoidingView, ScrollView } from "native-base";

// Components
import ResetPasswordForm from "components/forms/ResetPasswordForm";

export default function ResetPasswordModal({ disclosure }) {
	const [loading, setLoading] = useState(false);
	const { isOpen, onClose } = disclosure;

	// Form
	const resolver = yupResolver(ResetPasswordSchema);
	const mainForm = useForm({ resolver, mode: "onChange" });

	const onLogin = (data) => {
		console.log(data);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<KeyboardAvoidingView behavior='padding' enabled keyboardVerticalOffset={120}>
				<Modal.Content p={4}>
					<Modal.Header borderColor='transparent'>Reset Password</Modal.Header>
					<Modal.CloseButton />
					<Modal.Body>
						<FormProvider {...mainForm}>
							<ResetPasswordForm />
						</FormProvider>
					</Modal.Body>
					<Modal.Footer borderColor='transparent'>
						<HStack space={2}>
							<Button
								isLoading={loading}
								isLoadingText='Memproses'
								colorScheme='cyan'
								rounded='md'
								w='50%'
								_text={{ fontWeight: "semibold" }}
								_spinner={{ height: 5 }}
								onPress={mainForm.handleSubmit(onLogin)}
							>
								Reset
							</Button>
							<Button colorScheme='red' variant='outline' borderColor='red.500' w='50%'>
								Batal
							</Button>
						</HStack>
					</Modal.Footer>
				</Modal.Content>
			</KeyboardAvoidingView>
		</Modal>
	);
}
