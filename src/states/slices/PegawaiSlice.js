import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pegawai: null,
};

const PegawaiSlice = createSlice({
	name: "pegawai",
	initialState,
	reducers: {
		setPegawai: (state, action) => {
			state.pegawai = action.payload;
		},
		reset: () => initialState,
	},
});

export const PegawaiSelector = (state) => state.pegawai;
export const PegawaiActions = PegawaiSlice.actions;

export default PegawaiSlice;
