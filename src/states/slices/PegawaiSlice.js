import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = {
	pendidikan: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
	dokumen: createEntityAdapter({ sortComparer: (a, b) => b.uploadedAt.localeCompare(a.uploadedAt) }),
	mutasi: createEntityAdapter({ sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt) }),
	cuti: createEntityAdapter({ sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt) }),
};

const initialState = {
	pegawai: null,
	dataPribadi: null,
	pendidikan: entityAdapter.pendidikan.getInitialState(),
	dokumen: entityAdapter.dokumen.getInitialState(),
	mutasi: entityAdapter.mutasi.getInitialState(),
	cuti: entityAdapter.cuti.getInitialState(),
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
		setEntity: (state, action) => {
			Object.keys(action.payload).forEach((key) => entityAdapter[key].setAll(state[key], action.payload[key]));
		},
		addEntity: (state, action) => {
			const key = Object.keys(action.payload)[0];
			entityAdapter[key].addOne(state[key], action.payload[key]);
		},
		updateEntity: (state, action) => {
			const key = Object.keys(action.payload)[0];
			entityAdapter[key].updateOne(state[key], action.payload[key]);
		},
		deleteEntity: (state, action) => {
			const key = Object.keys(action.payload)[0];
			entityAdapter[key].removeOne(state[key], action.payload[key]);
		},
		resetAll: () => initialState,
	},
});

export const PegawaiSelector = {
	pegawai: (state) => state.pegawai,
	pendidikan: entityAdapter.pendidikan.getSelectors((state) => state.pegawai.pendidikan),
	dokumen: entityAdapter.dokumen.getSelectors((state) => state.pegawai.dokumen),
	mutasi: entityAdapter.mutasi.getSelectors((state) => state.pegawai.mutasi),
	cuti: entityAdapter.cuti.getSelectors((state) => state.pegawai.cuti),
};

export const PegawaiActions = PegawaiSlice.actions;

export default PegawaiSlice;
