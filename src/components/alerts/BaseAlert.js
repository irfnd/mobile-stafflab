// Styles & Icons
import { Feather } from "@expo/vector-icons";
import { X } from "lucide-react-native";
import { Alert, Box, HStack, Icon, IconButton, Text, VStack } from "native-base";

export default function BaseAlert({ props }) {
	const { toast, id, status, variant, title, description, isCloseable } = props;

	return (
		<Alert w='sm' variant={variant} status={status} rounded='lg' shadow='md'>
			<HStack w='full' alignItems='center' justifyContent='space-between'>
				<HStack alignItems='center' space={3}>
					<Alert.Icon size='2xl' />
					<VStack space={1}>
						<Text fontSize='md' fontWeight='semibold' color='gray.900'>
							{title}
						</Text>
						<Box _text={{ color: "gray.900" }}>{description}</Box>
					</VStack>
				</HStack>
				{isCloseable && (
					<IconButton
						variant='unstyled'
						icon={<Icon as={<X size={28} />} color='gray.900' />}
						_focus={{ borderWidth: 0 }}
						onPress={() => toast?.close(id)}
					/>
				)}
			</HStack>
		</Alert>
	);
}
