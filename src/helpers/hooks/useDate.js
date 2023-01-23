import { intlFormat } from "date-fns";

export default function useDate({ date, type = "date" }) {
	const options =
		type === "date"
			? { day: "long", month: "long", year: "long" }
			: {
					day: "numeric",
					month: "long",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					timeZoneName: "short",
			  };

	return intlFormat(new Date(date), options, { locale: "id-ID" });
}
