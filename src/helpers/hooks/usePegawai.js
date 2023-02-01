import Supabase from "helpers/Supabase";
import { getPegawai, getDataPribadi, getDokumen, getPendidikan, getMutasi } from "helpers/api/PegawaiApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "states/slices/AuthSlice";
import { PegawaiActions } from "states/slices/PegawaiSlice";

// Init
let pegawaiSubs;
let dataPribadiSubs;
let pendidikanSubs;
let dokumenSubs;
let mutasiSubs;

export default function usePegawai() {
	const { session } = useSelector(AuthSelector);
	const dispatch = useDispatch();

	const fetchAllData = async () => {
		const { data: pegawai } = await getPegawai(session?.user?.id);
		if (pegawai) dispatch(PegawaiActions.set({ pegawai }));

		const { data: dataPribadi } = await getDataPribadi(pegawai?.nip);
		if (dataPribadi) dispatch(PegawaiActions.set({ dataPribadi }));

		const { data: pendidikan } = await getPendidikan(pegawai?.nip);
		if (pendidikan) dispatch(PegawaiActions.set({ pendidikan }));

		const { data: dokumen } = await getDokumen(pegawai?.nip);
		if (dokumen) dispatch(PegawaiActions.set({ dokumen }));

		const { data: mutasi } = await getMutasi(pegawai?.nip);
		if (mutasi) dispatch(PegawaiActions.set({ mutasi }));
	};

	const changePegawai = (payload, keyState) => {
		const { createdAt, ...newState } = payload.new;
		if (payload.eventType === "UPDATE") {
			dispatch(PegawaiActions.set({ [keyState]: newState }));
		} else {
			dispatch(PegawaiActions.set({ [keyState]: null }));
		}
	};

	useEffect(() => {
		fetchAllData();

		pegawaiSubs = Supabase.channel("public:pegawai")
			.on("postgres_changes", { event: "*", schema: "public", table: "pegawai" }, (payload) => changePegawai(payload, "pegawai"))
			.subscribe();
		dataPribadiSubs = Supabase.channel("public:data_pribadi")
			.on("postgres_changes", { event: "*", schema: "public", table: "data_pribadi" }, (payload) => changePegawai(payload, "dataPribadi"))
			.subscribe();
		pendidikanSubs = Supabase.channel("public:pendidikan")
			.on("postgres_changes", { event: "*", schema: "public", table: "pendidikan" }, (payload) => changePegawai(payload, "pendidikan"))
			.subscribe();
		dokumenSubs = Supabase.channel("public:dokumen")
			.on("postgres_changes", { event: "*", schema: "public", table: "dokumen" }, (payload) => changePegawai(payload, "dokumen"))
			.subscribe();
		mutasiSubs = Supabase.channel("public:mutasi")
			.on("postgres_changes", { event: "*", schema: "public", table: "mutasi" }, (payload) => changePegawai(payload, "mutasi"))
			.subscribe();

		return () => {
			Supabase.removeChannel(pegawaiSubs);
			Supabase.removeChannel(dataPribadiSubs);
			Supabase.removeChannel(pendidikanSubs);
			Supabase.removeChannel(dokumenSubs);
			Supabase.removeChannel(mutasiSubs);
			dispatch(PegawaiActions.reset());
		};
	}, []);
}
