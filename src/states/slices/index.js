import { combineReducers } from "@reduxjs/toolkit";

// Slices
import AuthSlice from "states/slices/AuthSlice";
import ColorModeSlice from "states/slices/ColorModeSlice";
import PegawaiSlice from "states/slices/PegawaiSlice";

const rootReducers = combineReducers({
	[AuthSlice.name]: AuthSlice.reducer,
	[ColorModeSlice.name]: ColorModeSlice.reducer,
	[PegawaiSlice.name]: PegawaiSlice.reducer,
});

export default rootReducers;
