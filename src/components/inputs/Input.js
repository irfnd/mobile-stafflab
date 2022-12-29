// Components
import InputDefault from "components/inputs/InputDefault";
import InputPassword from "components/inputs/InputPassword";

export default function Input({ type, ...props }) {
	switch (type) {
		case "password":
			return <InputPassword {...props} />;
		default:
			return <InputDefault type={type} {...props} />;
	}
}
