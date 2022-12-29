import Supabase from "helpers/Supabase";

export const getPegawai = async (uuid) => await Supabase.from("pegawai").select("*").eq("uuidUser", uuid).single();
export const getDataPribadi = async (nip) => await Supabase.from("data_pribadi").select("*").eq("nipPegawai", nip).single();
export const getDokumen = async (nip) => await Supabase.from("dokumen").select("*").eq("nipPegawai", nip);

export default {
	getPegawai,
	getDataPribadi,
	getDokumen,
};
