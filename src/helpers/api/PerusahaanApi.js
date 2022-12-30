import Supabase from "helpers/Supabase";

export const getTipePegawai = async () => await Supabase.from("tipe_pegawai").select("*");
export const getStatusPegawai = async () => await Supabase.from("status_pegawai").select("*");
export const getInstansi = async () => await Supabase.from("instansi").select("*");
export const getDivisi = async () => await Supabase.from("divisi").select("*");
export const getJabatan = async () => await Supabase.from("jabatan").select("*");
export const getGolongan = async () => await Supabase.from("golongan").select("*");

export default {
	getTipePegawai,
	getStatusPegawai,
	getInstansi,
	getDivisi,
	getJabatan,
	getGolongan,
};
