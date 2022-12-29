import { combineReducers } from "@reduxjs/toolkit";

// Slices
import AuthSlice from "states/slices/AuthSlice";
import ColorModeSlice from "states/slices/ColorModeSlice";
import DivisiSlice from "states/slices/DivisiSlice";
import GolonganSlice from "states/slices/GolonganSlice";
import InstansiSlice from "states/slices/InstansiSlice";
import JabatanSlice from "states/slices/JabatanSlice";
import PegawaiSlice from "states/slices/PegawaiSlice";
import StatusPegawaiSlice from "states/slices/StatusPegawaiSlice";
import TipePegawaiSlice from "states/slices/TipePegawaiSlice";

const rootReducers = combineReducers({
	[AuthSlice.name]: AuthSlice.reducer,
	[ColorModeSlice.name]: ColorModeSlice.reducer,
	[DivisiSlice.name]: DivisiSlice.reducer,
	[GolonganSlice.name]: GolonganSlice.reducer,
	[InstansiSlice.name]: InstansiSlice.reducer,
	[JabatanSlice.name]: JabatanSlice.reducer,
	[PegawaiSlice.name]: PegawaiSlice.reducer,
	[StatusPegawaiSlice.name]: StatusPegawaiSlice.reducer,
	[TipePegawaiSlice.name]: TipePegawaiSlice.reducer,
});

export default rootReducers;
