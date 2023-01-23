export default function useDate({ date, type = "date" }) {
	const options =
		type === "date"
			? { day: "numeric", month: "long", year: "numeric" }
			: {
					day: "numeric",
					month: "long",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					timeZone: "Asia/Jakarta",
			  };

	return new Intl.DateTimeFormat("id-ID", options).format(new Date(date));
}
