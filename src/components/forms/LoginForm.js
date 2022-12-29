import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "helpers/Validations";
import { userSignIn } from "helpers/api/AuthApi";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Keyboard } from "react-native";

// Styles & Icons
import { Feather } from "@expo/vector-icons";
import { Button, Icon, VStack, useToast } from "native-base";

// Components
import BaseAlert from "components/alerts/BaseAlert";
import Input from "components/inputs/Input";

export default function LoginForm() {
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	// Form
	const resolver = yupResolver(LoginSchema);
	const mainForm = useForm({ resolver, mode: "onChange" });

	const onLogin = async (data) => {
		Keyboard.dismiss();
		setLoading(true);
		try {
			await userSignIn(data);
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
							title: "Login Berhasil!",
							description: "Anda dapat mengakses akun anda.",
							isCloseable: true,
						}}
					/>
				),
			});
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
							title: "Login Gagal!",
							description: err.message,
							isCloseable: true,
						}}
					/>
				),
			});
		}
		setLoading(false);
	};

	return (
		<FormProvider {...mainForm}>
			<VStack w='full' px={8} space={4}>
				<Input name='email' type='email' label='Email' size='lg' isRequired />
				<Input name='password' type='password' label='Password' size='lg' isRequired />
				<Button
					isLoading={loading}
					isLoadingText='Submitting'
					size='lg'
					colorScheme='cyan'
					rounded='md'
					mt={4}
					leftIcon={<Icon as={<Feather name='log-in' />} size='sm' mr={2} />}
					_text={{ fontWeight: "semibold" }}
					_spinner={{ height: 5 }}
					onPress={mainForm.handleSubmit(onLogin)}
				>
					Login
				</Button>
			</VStack>
		</FormProvider>
	);
}
