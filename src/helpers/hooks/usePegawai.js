import Supabase from "helpers/Supabase";
import { getCuti, getDataPribadi, getDokumen, getMutasi, getPegawai, getPendidikan } from "helpers/api/PegawaiApi";
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
let cutiSubs;

export default function usePegawai() {
	const { session } = useSelector(AuthSelector);
	const dispatch = useDispatch();

	const fetchAllData = async () => {
		const { data: pegawai } = await getPegawai(session?.user?.id);
		if (pegawai) dispatch(PegawaiActions.set({ pegawai }));

		const { data: dataPribadi } = await getDataPribadi(pegawai?.nip);
		if (dataPribadi) dispatch(PegawaiActions.set({ dataPribadi }));

		const { data: pendidikan } = await getPendidikan(pegawai?.nip);
		const { data: dokumen } = await getDokumen(pegawai?.nip);
		const { data: mutasi } = await getMutasi(pegawai?.nip);
		const { data: cuti } = await getCuti(pegawai?.nip);
		if (pendidikan && dokumen && mutasi && cuti) {
			dispatch(PegawaiActions.setEntity({ pendidikan, dokumen, mutasi, cuti }));
		}
	};

	const changeSingle = (payload, keyState) => {
		const { createdAt, ...newState } = payload.new;
		if (payload.eventType === "UPDATE") {
			dispatch(PegawaiActions.set({ [keyState]: newState }));
		} else {
			dispatch(PegawaiActions.set({ [keyState]: null }));
		}
	};

	const changeEntity = (payload, keyState) => {
		const { createdAt, id, ...newState } = payload.new;
		switch (payload.eventType) {
			case "INSERT":
				dispatch(PegawaiActions.addEntity({ [keyState]: payload.new }));
				break;
			case "UPDATE":
				dispatch(PegawaiActions.updateEntity({ [keyState]: { id: payload.old.id, changes: newState } }));
				break;
			default:
				dispatch(PegawaiActions.deleteEntity({ [keyState]: payload.old.id }));
				break;
		}
	};

	const pgChanges = (table) => ({ event: "*", schema: "public", table });

	useEffect(() => {
		fetchAllData();

		pegawaiSubs = Supabase.channel("public:pegawai")
			.on("postgres_changes", pgChanges("pegawai"), (payload) => changeSingle(payload, "pegawai"))
			.subscribe();
		dataPribadiSubs = Supabase.channel("public:data_pribadi")
			.on("postgres_changes", pgChanges("data_pribadi"), (payload) => changeSingle(payload, "dataPribadi"))
			.subscribe();

		pendidikanSubs = Supabase.channel("public:pendidikan")
			.on("postgres_changes", pgChanges("pendidikan"), (payload) => changeEntity(payload, "pendidikan"))
			.subscribe();
		dokumenSubs = Supabase.channel("public:dokumen")
			.on("postgres_changes", pgChanges("dokumen"), (payload) => changeEntity(payload, "dokumen"))
			.subscribe();
		mutasiSubs = Supabase.channel("public:mutasi")
			.on("postgres_changes", pgChanges("mutasi"), (payload) => changeEntity(payload, "mutasi"))
			.subscribe();
		cutiSubs = Supabase.channel("public:cuti")
			.on("postgres_changes", pgChanges("cuti"), (payload) => changeEntity(payload, "cuti"))
			.subscribe();

		return () => {
			Supabase.removeChannel(pegawaiSubs);
			Supabase.removeChannel(dataPribadiSubs);
			Supabase.removeChannel(pendidikanSubs);
			Supabase.removeChannel(dokumenSubs);
			Supabase.removeChannel(mutasiSubs);
			Supabase.removeChannel(cutiSubs);
			dispatch(PegawaiActions.resetAll());
		};
	}, []);
}
