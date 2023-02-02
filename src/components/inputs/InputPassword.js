import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

// Styles & Icons
import { Eye, EyeOff } from "lucide-react-native";
import { FormControl, Icon, Input, Pressable, useColorModeValue } from "native-base";

export default function InputPassword(props) {
	const { name, label = null, placeholder, size, isRequired = false } = props;
	const [showPass, setShowPass] = useState(false);

	// Form
	const { control, formState } = useFormContext();
	const { errors } = formState;

	// Color Mode
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
						bg='white'
						focusOutlineColor='cyan.500'
						InputRightElement={<EyeIcon handler={{ showPass, setShowPass }} />}
						rounded='md'
						shadow='md'
						value={value}
						onChangeText={(e) => onChange(e)}
						onBlur={onBlur}
						_dark={{ bg: "gray.800" }}
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
			<Icon as={showPass ? <EyeOff size={24} /> : <Eye size={24} />} mx={4} color='cyan.500' />
		</Pressable>
	);
}
