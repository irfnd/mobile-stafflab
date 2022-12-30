import { combineReducers } from "@reduxjs/toolkit";

// Slices
import AuthSlice from "states/slices/AuthSlice";
import ColorModeSlice from "states/slices/ColorModeSlice";
import PegawaiSlice from "states/slices/PegawaiSlice";
import PerusahaanSlice from "states/slices/PerusahaanSlice";

const rootReducers = combineReducers({
	[AuthSlice.name]: AuthSlice.reducer,
	[ColorModeSlice.name]: ColorModeSlice.reducer,
	[PegawaiSlice.name]: PegawaiSlice.reducer,
	[PerusahaanSlice.name]: PerusahaanSlice.reducer,
});

export default rootReducers;
