// Styles & Icons
import { VStack } from "native-base";

// Components
import DataDetail from "components/details/dataPegawai/DataDetail";
import DataDokumen from "components/details/dataPegawai/DataDokumen";
import FotoProfil from "components/details/dataPegawai/FotoProfil";

export default function DataPegawaiDetail() {
	return (
		<VStack h='full' space={8} p={8}>
			<FotoProfil />
			<DataDetail />
			<DataDokumen />
		</VStack>
	);
}
