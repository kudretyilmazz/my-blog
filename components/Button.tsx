// Import React
import { HtmlHTMLAttributes } from "react";

// Import Next
import Link from "next/link";

// Import Translation
import useTranslation from "next-translate/useTranslation";

interface CustomLinkValues {
	url: string;
	props?: Record<string, any>;
}

interface ButtonCustomProps extends HtmlHTMLAttributes<HTMLButtonElement> {
	label?: string;
	customLink?: CustomLinkValues;
	push?: string;
}

function Button(props: ButtonCustomProps) {
	// Props Destructions
	const { label, customLink, push } = props;

	// Variables
	const { t } = useTranslation("translation");

	return push ? (
		<Link href={push}>
			<button
				role="button"
				aria-label={label ? t(label) : "button"}
				className="px-6 py-3 bg-secondary text-white font-regular rounded-full duration-500 transition hover:scale-105 "
			>
				{label && t(label)}
			</button>
		</Link>
	) : (
		<button
			role="button"
			aria-label={label ? t(label) : "button"}
			className="px-6 py-3 bg-secondary text-white font-regular rounded-full duration-500 transition hover:scale-105 "
		>
			{customLink && (
				<a href={customLink.url} {...customLink.props}>
					{label && t(label)}
				</a>
			)}
			{!customLink && label && t(label)}
		</button>
	);
}

export default Button;
