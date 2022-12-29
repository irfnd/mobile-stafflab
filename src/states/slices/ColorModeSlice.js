import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	color: "light",
};

const ColorModeSlice = createSlice({
	name: "colorMode",
	initialState,
	reducers: {
		setColor: (state) => {
			state.color = state.color === "light" ? "dark" : "light";
		},
		reset: () => initialState,
	},
});

export const ColorModeSelector = (state) => state.colorMode;
export const ColorModeActions = ColorModeSlice.actions;

export default ColorModeSlice;
