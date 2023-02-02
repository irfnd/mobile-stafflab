import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom Hooks
import usePegawai from "helpers/hooks/usePegawai";
import usePerusahaan from "helpers/hooks/usePerusahaan";

// Styles
import { useColorModeValue } from "native-base";

// Screens
import Cuti from "screens/Cuti";
import PengajuanCuti from "screens/PengajuanCuti";
import DataPribadi from "screens/DataPribadi";
import Home from "screens/Home";
import KontakAkun from "screens/KontakAkun";
import Lamaran from "screens/Lamaran";
import Mutasi from "screens/Mutasi";
import Pendidikan from "screens/Pendidikan";

// Init
const Stack = createNativeStackNavigator();

export default function MainNavigation() {
	usePerusahaan();
	usePegawai();

	// Color Mode
	const statusBarStyle = useColorModeValue("dark", "light");
	const headerBgColor = useColorModeValue("#ffffff", "#262626");
	const headerTintColor = useColorModeValue("#171717", "#ffffff");
	const headerStyles = { headerStyle: { backgroundColor: headerBgColor }, headerTintColor };

	return (
		<Stack.Navigator screenOptions={{ animation: "slide_from_bottom" }}>
			<Stack.Screen name='Home' component={Home} options={{ headerShown: false, statusBarStyle }} />
			<Stack.Screen name='DataPribadi' component={DataPribadi} options={{ title: "Data Pribadi", statusBarStyle, ...headerStyles }} />
			<Stack.Screen name='KontakAkun' component={KontakAkun} options={{ title: "Kontak & Akun", statusBarStyle, ...headerStyles }} />
			<Stack.Screen name='Pendidikan' component={Pendidikan} options={{ title: "Riwayat Pendidikan", statusBarStyle, ...headerStyles }} />
			<Stack.Screen name='Mutasi' component={Mutasi} options={{ title: "Riwayat Mutasi", statusBarStyle, ...headerStyles }} />
			<Stack.Screen name='Cuti' component={Cuti} options={{ title: "Riwayat Cuti", statusBarStyle, ...headerStyles }} />
			<Stack.Screen name='PengajuanCuti' component={PengajuanCuti} options={{ title: "Pengajuan Cuti", statusBarStyle, ...headerStyles }} />
			<Stack.Screen name='Lamaran' component={Lamaran} options={{ title: "Data Lamaran", statusBarStyle, ...headerStyles }} />
		</Stack.Navigator>
	);
}
