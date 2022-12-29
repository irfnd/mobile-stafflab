import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// Storages
import AsyncStorage from "@react-native-async-storage/async-storage";

// Reducers
import rootReducers from "states/slices";

const persistConfig = {
	key: "stafflab",
	storage: AsyncStorage,
	whitelist: ["auth", "colorMode"],
};

export const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducers),
	middleware: [thunk],
});

export const persistor = persistStore(store);

export default {
	store,
	persistor,
};
