import { Controller, useFormContext } from "react-hook-form";

// Styles & Icons
import { FormControl, Input, useColorModeValue } from "native-base";

export default function InputDefault(props) {
	const { name, type, label = null, placeholder, size, isRequired = false } = props;

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
						type={type}
						bg={bgInput}
						placeholder={placeholder}
						size={size}
						focusOutlineColor='cyan.500'
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
