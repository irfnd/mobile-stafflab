import axios from "axios";

const authorization = `Bearer ${process.env.SUPABASE_ANON_KEY}`;
const hostFunction = process.env.SUPABASE_FUNCTION;
const headers = { authorization, "content-type": "application/json" };

export const updateUser = async (newData, uuid) => {
	const data = JSON.stringify(newData);
	const results = await axios.put(`${hostFunction}/users/${uuid}`, data, { headers });
	return results.data.user;
};

export default {
	updateUser,
};
