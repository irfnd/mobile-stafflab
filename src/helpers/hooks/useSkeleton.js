import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";
import { PerusahaanSelector } from "states/slices/PerusahaanSlice";

export default function useSkeleton() {
	const { pegawai, dataPribadi } = useSelector(PegawaiSelector.pegawai);
	const dokumen = useSelector(PegawaiSelector.dokumen.selectAll);
	const pendidikan = useSelector(PegawaiSelector.pendidikan.selectAll);
	const mutasi = useSelector(PegawaiSelector.mutasi.selectAll);
	const cuti = useSelector(PegawaiSelector.cuti.selectAll);

	const tipePegawai = useSelector(PerusahaanSelector.tipePegawai.selectAll);
	const statusPegawai = useSelector(PerusahaanSelector.statusPegawai.selectAll);
	const instansi = useSelector(PerusahaanSelector.instansi.selectAll);
	const divisi = useSelector(PerusahaanSelector.divisi.selectAll);
	const jabatan = useSelector(PerusahaanSelector.jabatan.selectAll);
	const golongan = useSelector(PerusahaanSelector.golongan.selectAll);

	if (
		pegawai &&
		dataPribadi &&
		dokumen &&
		pendidikan &&
		mutasi &&
		cuti &&
		tipePegawai &&
		statusPegawai &&
		instansi &&
		divisi &&
		jabatan &&
		golongan
	) {
		return true;
	}
	return false;
}
