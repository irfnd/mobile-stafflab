/* eslint-disable react-hooks/rules-of-hooks */
import DateTimePicker from "@react-native-community/datetimepicker";
import useDate from "helpers/hooks/useDate";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

// Styles & Icons
import { FormControl, Pressable, Text, VStack, useColorModeValue } from "native-base";

export default function InputDate(props) {
	const { name, label = null, placeholder, withMin = false, isRequired = false } = props;
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());

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
				render={({ field: { onChange, value } }) => (
					<>
						<Pressable onPress={() => setShowDatePicker(true)}>
							<VStack
								bg='white'
								p={3}
								borderWidth={1}
								borderColor={errors[name] ? "red.500" : "trueGray.300"}
								rounded='md'
								shadow='md'
								_dark={{ bg: "trueGray.800", borderColor: errors[name] ? "red.500" : "trueGray.700" }}
							>
								<Text color={!value ? "trueGray.400" : "black"} _dark={{ color: !value ? "white:alpha.20" : "white" }}>
									{value ? useDate({ date: value }) : placeholder}
								</Text>
							</VStack>
						</Pressable>
						{showDatePicker && (
							<DateTimePicker
								value={selectedDate}
								minimumDate={withMin ? new Date() : null}
								mode='date'
								onChange={(_, date) => {
									setShowDatePicker(false);
									setSelectedDate(date);
									onChange(date.toISOString().split("T")[0]);
								}}
							/>
						)}
					</>
				)}
			/>
			{errors[name] && <FormControl.ErrorMessage>{errors[name].message}</FormControl.ErrorMessage>}
		</FormControl>
	);
}
