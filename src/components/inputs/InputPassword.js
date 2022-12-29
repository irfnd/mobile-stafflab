import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

// Styles & Icons
import { Icon, Input, FormControl, Pressable, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";

export default function InputPassword(props) {
	const { name, label = null, placeholder, size, isRequired = false } = props;
	const [showPass, setShowPass] = useState(false);

	// Form
	const { control, formState } = useFormContext();
	const { errors } = formState;

	// Color Mode
	const bgInput = useColorModeValue("white", "gray.800");
	const labelColor = useColorModeValue("gray.900", "white");

	return (
		<FormControl isRequired={isRequired} isInvalid={errors[name]}>
			{label && (
				<FormControl.Label _text={{ fontWeight: "semibold", color: labelColor }} _astrick={isRequired ? { ml: 1 } : null}>
					{label}
				</FormControl.Label>
			)}
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						type={showPass ? "text" : "password"}
						placeholder={placeholder}
						size={size}
						bg={bgInput}
						focusOutlineColor='cyan.500'
						InputRightElement={<EyeIcon handler={{ showPass, setShowPass }} />}
						rounded='md'
						shadow='md'
						value={value}
						onChangeText={(e) => onChange(e)}
						onBlur={onBlur}
					/>
				)}
			/>
			{errors[name] && <FormControl.ErrorMessage>{errors[name].message}</FormControl.ErrorMessage>}
		</FormControl>
	);
}

function EyeIcon({ handler }) {
	const { showPass, setShowPass } = handler;
	return (
		<Pressable onPress={() => setShowPass(!showPass)}>
			<Icon as={<Feather name={showPass ? "eye-off" : "eye"} />} size={6} mx={4} color='cyan.500' />
		</Pressable>
	);
}
