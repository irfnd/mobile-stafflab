import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = {
	tipePegawai: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
	statusPegawai: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
	instansi: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
	divisi: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
	jabatan: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
	golongan: createEntityAdapter({ sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt) }),
};

const initialState = {
	tipePegawai: entityAdapter.tipePegawai.getInitialState(),
	statusPegawai: entityAdapter.statusPegawai.getInitialState(),
	instansi: entityAdapter.instansi.getInitialState(),
	divisi: entityAdapter.divisi.getInitialState(),
	jabatan: entityAdapter.jabatan.getInitialState(),
	golongan: entityAdapter.golongan.getInitialState(),
};

const PerusahaanSlice = createSlice({
	name: "perusahaan",
	initialState,
	reducers: {
		set: (state, action) => {
			Object.keys(action.payload).forEach((key) => entityAdapter[key].setAll(state[key], action.payload[key]));
		},
		add: (state, action) => {
			const key = Object.keys(action.payload)[0];
			entityAdapter[key].addOne(state[key], action.payload[key]);
		},
		update: (state, action) => {
			const key = Object.keys(action.payload)[0];
			entityAdapter[key].updateOne(state[key], action.payload[key]);
		},
		delete: (state, action) => {
			const key = Object.keys(action.payload)[0];
			entityAdapter[key].removeOne(state[key], action.payload[key]);
		},
		reset: (state, action) => {
			action.payload.forEach((key) => entityAdapter[key].removeAll(state[key]));
		},
		resetAll: () => initialState,
	},
});

export const PerusahaanSelector = {
	tipePegawai: entityAdapter.tipePegawai.getSelectors((state) => state.perusahaan.tipePegawai),
	statusPegawai: entityAdapter.statusPegawai.getSelectors((state) => state.perusahaan.statusPegawai),
	instansi: entityAdapter.instansi.getSelectors((state) => state.perusahaan.instansi),
	divisi: entityAdapter.divisi.getSelectors((state) => state.perusahaan.divisi),
	jabatan: entityAdapter.jabatan.getSelectors((state) => state.perusahaan.jabatan),
	golongan: entityAdapter.golongan.getSelectors((state) => state.perusahaan.golongan),
};

export const PerusahaanActions = PerusahaanSlice.actions;

export default PerusahaanSlice;
