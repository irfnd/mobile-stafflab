// Styles & Icons
import { HStack, Text, VStack } from "native-base";

export default function BrandLogo() {
	return (
		<VStack alignItems='center' w='full'>
			<HStack justifyContent='center' w='full'>
				<Text fontFamily='mono' fontSize='5xl' letterSpacing='xs' lineHeight='sm'>
					Staff
				</Text>
				<Text fontFamily='mono' color='cyan.500' fontSize='5xl' letterSpacing='xs' lineHeight='sm'>
					Lab
				</Text>
			</HStack>
			<Text fontSize={12}>Employees & Staff Management System</Text>
		</VStack>
	);
}
