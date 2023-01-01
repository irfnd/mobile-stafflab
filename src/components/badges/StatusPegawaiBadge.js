// Styles & Icons
import { Briefcase, CheckCircle, Home, XCircle } from "lucide-react-native";
import { Badge, HStack, Icon, Text, useColorModeValue } from "native-base";

export default function StatusPegawaiBadge({ status }) {
	// Style Hooks
	const bgBadgeAktif = useColorModeValue("cyan.500", "cyan.500:alpha.70");
	const bgBadgeCuti = useColorModeValue("warning.500", "warning.500:alpha.70");
	const bgBadgePensiun = useColorModeValue("muted.500", "muted.500:alpha.70");
	const bgBadgePhk = useColorModeValue("error.500", "error.500:alpha.70");

	const checkBadge = (status) => {
		switch (status) {
			case "Cuti":
				return { icon: <Home size={14} />, bgColor: bgBadgeCuti };
			case "Pensiun":
				return { icon: <Briefcase size={14} />, bgColor: bgBadgePensiun };
			case "PHK":
				return { icon: <XCircle size={14} />, bgColor: bgBadgePhk };
			default:
				return { icon: <CheckCircle size={14} />, bgColor: bgBadgeAktif };
		}
	};

	return (
		<Badge bg={checkBadge(status).bgColor} position='absolute' bottom={0} rounded='lg'>
			<HStack alignItems='center' space={1}>
				<Icon as={checkBadge(status).icon} color='white' />
				<Text fontSize='xs' fontWeight='medium' color='white'>
					{status}
				</Text>
			</HStack>
		</Badge>
	);
}
