import Supabase from "helpers/Supabase";
import { useEffect } from "react";
import { store } from "states/store";
import { AuthActions } from "states/slices/AuthSlice";

export default function useAuth() {
	useEffect(() => {
		Supabase.auth.getSession().then(({ data: { session } }) => {
			store.dispatch(AuthActions.setSession(session));
		});

		Supabase.auth.onAuthStateChange((_event, session) => {
			store.dispatch(AuthActions.setSession(session));
		});
	}, []);
}
