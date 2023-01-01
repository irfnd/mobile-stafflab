import { useDispatch } from "react-redux";
import { AuthActions } from "states/slices/AuthSlice";

// Styles & Icons
import { LogOut, Menu, Moon, Sun, X } from "lucide-react-native";
import { Box, Fab, Icon, IconButton, Stagger, VStack, useColorMode, useDisclose } from "native-base";

export default function BaseStagger() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onToggle, onClose } = useDisclose();
	const dispatch = useDispatch();

	return (
		<>
			<Box alignSelf='flex-end' postition='absolute' right={8} bottom='94px'>
				<Stagger
					visible={isOpen}
					initial={{ opacity: 0, scale: 0, translateY: 34 }}
					animate={{
						translateY: 0,
						scale: 1,
						opacity: 1,
						transition: { type: "spring", mass: 0.8, stagger: { offset: 30, reverse: true } },
					}}
					exit={{ translateY: 34, scale: 0.5, opacity: 0, transition: { duration: 100, stagger: { offset: 30, reverse: true } } }}
				>
					<VStack space={2}>
						<IconButton
							variant='solid'
							bg={colorMode === "light" ? "trueGray.600" : "yellow.600"}
							icon={<Icon color='white' as={colorMode === "light" ? <Moon /> : <Sun />} size={6} />}
							borderRadius='full'
							w='56px'
							p={4}
							shadow={2}
							_pressed={{ bg: colorMode === "light" ? "trueGray.800" : "yellow.800" }}
							onPress={() => {
								onClose();
								toggleColorMode();
							}}
						/>
						<IconButton
							variant='solid'
							bg='red.600'
							icon={<Icon color='white' as={<LogOut />} size={6} />}
							borderRadius='full'
							w='56px'
							p={4}
							shadow={2}
							_pressed={{ bg: "red.800" }}
							onPress={() => {
								onClose();
								dispatch(AuthActions.reset());
							}}
						/>
					</VStack>
				</Stagger>
			</Box>
			<Fab
				colorScheme='cyan'
				renderInPortal={false}
				placement='bottom-right'
				right={8}
				bottom={8}
				icon={<Icon color='white' as={isOpen ? <X /> : <Menu />} size={6} />}
				shadow={2}
				onPress={onToggle}
			/>
		</>
	);
}
