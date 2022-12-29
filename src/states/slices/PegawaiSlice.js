import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pegawai: null,
	dataPribadi: null,
	pendidikan: null,
	dokumen: null,
	mutasi: null,
	cuti: null,
};

const PegawaiSlice = createSlice({
	name: "pegawai",
	initialState,
	reducers: {
		set: (state, action) => {
			const key = Object.keys(action.payload)[0];
			const value = Object.values(action.payload)[0];
			state[key] = value;
		},
		reset: () => initialState,
	},
});

export const PegawaiSelector = (state) => state.pegawai;
export const PegawaiActions = PegawaiSlice.actions;

export default PegawaiSlice;
