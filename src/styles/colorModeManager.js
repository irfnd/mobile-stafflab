import { ColorModeActions } from "states/slices/ColorModeSlice";
import { store } from "states/store";

const colorModeManager = {
	get: () => store.getState().colorMode.color,
	set: () => store.dispatch(ColorModeActions.setColor()),
};

export default colorModeManager;
