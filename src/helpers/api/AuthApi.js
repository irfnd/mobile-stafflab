import Supabase from "helpers/Supabase";

export const userSignIn = async (credentials) => {
	const { data, error } = await Supabase.auth.signInWithPassword(credentials);
	if (error) throw error;
	return data;
};

export default {
	userSignIn,
};
