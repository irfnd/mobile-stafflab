import { Keyboard } from "react-native";

// Styles & Icons
import { Flex, Pressable, VStack, useColorModeValue } from "native-base";

// Components
import BrandLogo from "components/BrandLogo";
import LoginForm from "components/forms/LoginForm";

export default function Login() {
	// Color Mode
	const bgGradient = { colors: ["blue.500", "cyan.500"], start: [0, 0], end: [1, 1] };
	const bgWrapper = useColorModeValue("white", "gray.900");

	return (
		<Pressable onPress={() => Keyboard.dismiss()}>
			<Flex justify='center' bg={{ linearGradient: bgGradient }} align='center' h='full' px={8}>
				<VStack bg={bgWrapper} py={12} space={8} rounded='xl' shadow='md' w='full'>
					<BrandLogo />
					<LoginForm />
				</VStack>
			</Flex>
		</Pressable>
	);
}
