import Supabase from "helpers/Supabase";
import { useEffect } from "react";
import { store } from "states/store";
import { AuthActions } from "states/slices/AuthSlice";

const checkClaims = (session) => {
	if (session) {
		const claims = session.user.app_metadata?.claims;
		if (claims) {
			if (claims !== "ADMIN") {
				store.dispatch(AuthActions.setSession(session));
			} else {
				store.dispatch(AuthActions.setSession(null));
			}
		} else {
			store.dispatch(AuthActions.setSession(session));
		}
	} else {
		store.dispatch(AuthActions.setSession(null));
	}
};

export default function useAuth() {
	useEffect(() => {
		Supabase.auth.getSession().then(({ data: { session } }) => checkClaims(session));
		Supabase.auth.onAuthStateChange((_event, session) => checkClaims(session));
	}, []);
}
