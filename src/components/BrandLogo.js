// Styles & Icons
import { HStack, Text, VStack } from "native-base";

export default function BrandLogo() {
	return (
		<VStack alignItems='center'>
			<HStack justifyContent='center'>
				<Text fontFamily='mono' fontSize='5xl' letterSpacing='xs' lineHeight='sm'>
					Staff
				</Text>
				<Text fontFamily='mono' color='cyan.500' fontSize='5xl' letterSpacing='xs' lineHeight='sm'>
					Lab
				</Text>
			</HStack>
			<Text fontSize={10}>Employees & Staff Management System</Text>
		</VStack>
	);
}
