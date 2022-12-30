import Supabase from "helpers/Supabase";
import PerusahaanApi from "helpers/api/PerusahaanApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PerusahaanActions } from "states/slices/PerusahaanSlice";

export default function usePerusahaan() {
	const dispatch = useDispatch();

	const fetchAllData = async () => {
		const { data: tipePegawai } = await PerusahaanApi.getTipePegawai();
		const { data: statusPegawai } = await PerusahaanApi.getStatusPegawai();
		const { data: instansi } = await PerusahaanApi.getInstansi();
		const { data: divisi } = await PerusahaanApi.getDivisi();
		const { data: jabatan } = await PerusahaanApi.getJabatan();
		const { data: golongan } = await PerusahaanApi.getGolongan();

		if (tipePegawai && statusPegawai && instansi && divisi && jabatan && golongan) {
			dispatch(PerusahaanActions.set({ tipePegawai, statusPegawai, instansi, divisi, jabatan, golongan }));
		}
	};

	const changePerusahaan = (payload, keyState) => {
		const { createdAt, id, ...newState } = payload.new;
		switch (payload.eventType) {
			case "INSERT":
				dispatch(PerusahaanActions.add({ [keyState]: payload.new }));
				break;
			case "UPDATE":
				dispatch(PerusahaanActions.update({ [keyState]: { id: payload.old.id, changes: newState } }));
				break;
			default:
				dispatch(PerusahaanActions.delete({ [keyState]: payload.old.id }));
				break;
		}
	};

	const postgresChanges = (table) => ({ event: "*", schema: "public", table });

	useEffect(() => {
		fetchAllData();

		Supabase.channel("public:tipe_pegawai")
			.on("postgres_changes", postgresChanges("tipe_pegawai"), (payload) => changePerusahaan(payload, "tipePegawai"))
			.subscribe();
		Supabase.channel("public:status_pegawai")
			.on("postgres_changes", postgresChanges("status_pegawai"), (payload) => changePerusahaan(payload, "statusPegawai"))
			.subscribe();
		Supabase.channel("public:instansi")
			.on("postgres_changes", postgresChanges("instansi"), (payload) => changePerusahaan(payload, "instansi"))
			.subscribe();
		Supabase.channel("public:divisi")
			.on("postgres_changes", postgresChanges("divisi"), (payload) => changePerusahaan(payload, "divisi"))
			.subscribe();
		Supabase.channel("public:jabatan")
			.on("postgres_changes", postgresChanges("jabatan"), (payload) => changePerusahaan(payload, "jabatan"))
			.subscribe();
		Supabase.channel("public:golongan")
			.on("postgres_changes", postgresChanges("golongan"), (payload) => changePerusahaan(payload, "golongan"))
			.subscribe();
	}, []);
}
