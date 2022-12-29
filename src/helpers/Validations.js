import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const LoginSchema = yup.object({
	email: yup.string().email("Email harus valid!").trim().required("Email wajib diisi!"),
	password: yup.string().trim().required("Password wajib diisi!"),
});

export default {
	LoginSchema,
};
