import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "helpers/Validations";
import { updateUser } from "helpers/api/FunctionApi";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { Button, HStack, KeyboardAvoidingView, Modal, useToast } from "native-base";

// Components
import BaseAlert from "components/alerts/BaseAlert";
import ResetPasswordForm from "components/forms/ResetPasswordForm";

export default function ResetPasswordModal({ disclosure }) {
	const [loading, setLoading] = useState(false);
	const { pegawai } = useSelector(PegawaiSelector.pegawai);
	const { isOpen, onClose } = disclosure;
	const toast = useToast();

	// Form
	const resolver = yupResolver(ResetPasswordSchema);
	const mainForm = useForm({ resolver, mode: "onChange" });

	const onReset = async ({ password }) => {
		Keyboard.dismiss();
		setLoading(true);
		try {
			await updateUser({ password }, pegawai?.uuidUser);
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
							title: "Reset Password Berhasil!",
							description: "Password Anda telah diganti.",
							isCloseable: true,
						}}
					/>
				),
			});
			mainForm.reset();
			onClose();
		} catch (err) {
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
							title: "Reset Password Gagal!",
							description: "Gagal menganti password Anda.",
							isCloseable: true,
						}}
					/>
				),
			});
		}
		setLoading(false);
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
								onPress={mainForm.handleSubmit(onReset)}
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
