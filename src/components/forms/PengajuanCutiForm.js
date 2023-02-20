// Styles & Icons
import { VStack } from "native-base";

// Components
import Input from "components/inputs/Input";

export default function PengajuanCutiForm() {
	return (
		<VStack w='full' space={4}>
			<Input name='mulaiCuti' type='date' label='Tanggal Mulai' placeholder='Masukan tanggal mulai cuti' withMin isRequired />
			<Input name='selesaiCuti' type='date' label='Tanggal Selesai' placeholder='Masukan tanggal selesai cuti' withMin isRequired />
			<Input name='keterangan' type='textarea' label='Keterangan' placeholder='Masukan keterangan cuti' size='md' isRequired />
			<Input name='file' type='file' label='Dokumen Pendukung' placeholder='Pilih dokumen pendukung' size='md' isRequired />
		</VStack>
	);
}
