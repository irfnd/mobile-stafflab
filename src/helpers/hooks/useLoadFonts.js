import { useFonts } from "expo-font";
import {
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
} from "@expo-google-fonts/inter";
import { ShareTechMono_400Regular } from "@expo-google-fonts/share-tech-mono";

export default function useLoadFonts() {
	const [fontsLoaded, error] = useFonts({
		Inter_100Thin,
		Inter_200ExtraLight,
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
		Inter_900Black,
		ShareTechMono_400Regular,
	});

	return { fontsLoaded, error };
}
