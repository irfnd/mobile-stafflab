import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const LoginSchema = yup.object({
	email: yup.string().email("Email harus valid!").trim().required("Email wajib diisi!"),
	password: yup.string().trim().required("Password wajib diisi!"),
});

export const ResetPasswordSchema = yup.object({
	password: yup
		.string()
		.trim()
		.required("Password baru wajib diisi!")
		.min(8, "Password harus berisi minimal 8 karakter!")
		.minLowercase(1, "Password harus berisi minimal 1 huruf kecil!")
		.minUppercase(1, "Password harus berisi minimal 1 huruf kapital!")
		.minNumbers(1, "Password harus berisi minimal 1 nomor!")
		.minSymbols(1, "Password harus berisi minimal 1 simbol!"),
	confirm: yup
		.string()
		.trim()
		.required("Konfirmasi password wajib diisi!")
		.oneOf([yup.ref("password"), null], "Konfirmasi password tidak cocok!"),
});

export const PengajuanCutiSchema = yup.object({
	mulaiCuti: yup.string().trim().required("Tanggal mulai cuti wajib diisi!"),
	selesaiCuti: yup
		.string()
		.trim()
		.required("Tanggal selesai cuti wajib diisi!")
		.notOneOf([yup.ref("mulaiCuti"), null], "Tanggal selesai cuti tidak boleh sama dengan tanggal mulai cuti!"),
	keterangan: yup
		.string()
		.trim()
		.max(100, "Keterangan cuti harus berisi kurang dari 100 karakter!")
		.required("Keterangan cuti wajib diisi!"),
});

export default {
	LoginSchema,
	ResetPasswordSchema,
	PengajuanCutiSchema,
};
