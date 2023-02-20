// Components
import InputDefault from "components/inputs/InputDefault";
import InputPassword from "components/inputs/InputPassword";
import InputDate from "components/inputs/InputDate";
import InputTextarea from "components/inputs/InputTextarea";
import InputFile from "components/inputs/InputFile";

export default function Input({ type, ...props }) {
	switch (type) {
		case "password":
			return <InputPassword {...props} />;
		case "textarea":
			return <InputTextarea {...props} />;
		case "date":
			return <InputDate {...props} />;
		case "file":
			return <InputFile {...props} />;
		default:
			return <InputDefault type={type} {...props} />;
	}
}
