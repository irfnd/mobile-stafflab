import "moment/locale/id";
import moment from "moment-timezone";

// Default Locale and TZ
moment.locale("id");
moment.tz.setDefault("Asia/Jakarta");

export default function useDate({ date, type = "date" }) {
	return <>{moment(new Date(date)).format(type === "date" ? "DD MMMM YYYY" : "DD MMMM YYYY HH:MM z")}</>;
}
