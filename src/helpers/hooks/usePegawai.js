import Supabase from "helpers/Supabase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "states/slices/AuthSlice";
import { PegawaiActions } from "states/slices/PegawaiSlice";

export default function usePegawai() {
	const { session } = useSelector(AuthSelector);
	const dispatch = useDispatch();

	const fetchPegawai = async () => {
		const { data, error } = await Supabase.from("pegawai").select("*").eq("uuidUser", session?.user?.id).single();
		if (data && !error) dispatch(PegawaiActions.setPegawai(data));
	};

	useEffect(() => {
		if (session) {
			fetchPegawai();
		}
	}, [session]);
}
