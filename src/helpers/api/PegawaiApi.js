import Supabase from "helpers/Supabase";

export const getPegawai = async (uuid) => await Supabase.from("pegawai").select("*").eq("uuidUser", uuid).single();
export const getDataPribadi = async (nip) => await Supabase.from("data_pribadi").select("*").eq("nipPegawai", nip).single();
export const getPendidikan = async (nip) => await Supabase.from("pendidikan").select("*").eq("nipPegawai", nip);
export const getMutasi = async (nip) => await Supabase.from("mutasi").select("*").eq("nipPegawai", nip);
export const getCuti = async (nip) => await Supabase.from("cuti").select("*").eq("nipPegawai", nip);
export const getDokumen = async (nip) => await Supabase.from("dokumen").select("*").eq("nipPegawai", nip);

export const downloadFile = async (filePath) => await Supabase.storage.from("dokumen").download(filePath);

export const postPengajuanCuti = async (data) => {
	const { data: pengajuanCuti, error } = await Supabase.from("cuti").insert(data).select();
	if (error) throw error;
	return pengajuanCuti[0];
};

export default {
	getPegawai,
	getDataPribadi,
	getPendidikan,
	getMutasi,
	getCuti,
	getDokumen,
	postPengajuanCuti,
};
