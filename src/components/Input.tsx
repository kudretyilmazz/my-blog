// Import React
import { InputHTMLAttributes } from "react";

// Import Translation
import useTranslation from "next-translate/useTranslation";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

function Input(props: InputCustomProps) {
	// Props Destructions
	const { label, name, placeholder } = props;

	// Variables
	const { t } = useTranslation("translation");

	// Without Classname Props
	const inputProps = { ...props };
	delete inputProps.className;

	return (
		<div className={`flex flex-col ${props.className}`}>
			{label && (
				<label htmlFor={name} className="px-1 pb-1 text-gray-700 text-sm">
					{t(label)}
				</label>
			)}
			<input
				{...inputProps}
				aria-label="input"
				id={name}
				placeholder={placeholder && t(placeholder)}
				className="focus:outline-none w-100 h-11 placeholder:text-gray-500 border-gray-300 py-2 px-4 border-2 rounded-md"
			/>
		</div>
	);
}

export default Input;
