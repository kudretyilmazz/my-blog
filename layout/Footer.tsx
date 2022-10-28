// Import React
import React from "react";

// Import Translation
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
	// Variables
	const { t } = useTranslation("common");
	return (
		<footer className="flex flex-col mt-auto">
			<div className="flex gap-x-5 justify-center items-center">
				<a href="mailto:kudretylmzzz@gmail.com" aria-label="my e-mail">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						enableBackground="new 0 0 330.001 330.001"
						version="1.1"
						viewBox="0 0 330.001 330.001"
						xmlSpace="preserve"
						className="w-6 h-6  dark:fill-white cursor-pointer"
					>
						<g>
							<path d="M173.871 177.097a14.982 14.982 0 01-8.87 2.903 14.98 14.98 0 01-8.871-2.903L30 84.602.001 62.603 0 275.001c.001 8.284 6.716 15 15 15L315.001 290c8.285 0 15-6.716 15-14.999V62.602l-30.001 22-126.129 92.495z"></path>
							<path d="M165.001 146.4L310.087 40.001 19.911 40z"></path>
						</g>
					</svg>
				</a>

				<a
					href="https://www.linkedin.com/in/kudretyilmaz/"
					aria-label="my linkedin page"
					target="_blank"
					rel="noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						className="w-6 h-6 dark:fill-white cursor-pointer"
						enableBackground="new 0 0 504.4 504.4"
						version="1.1"
						viewBox="0 0 504.4 504.4"
						xmlSpace="preserve"
					>
						<path d="M377.6.2H126.4C56.8.2 0 57 0 126.6v251.6c0 69.2 56.8 126 126.4 126H378c69.6 0 126.4-56.8 126.4-126.4V126.6C504 57 447.2.2 377.6.2zM168 408.2H96v-208h72v208zm-36.4-240c-20.4 0-36.8-16.4-36.8-36.8s16.4-36.8 36.8-36.8 36.8 16.4 36.8 36.8c-.4 20.4-16.8 36.8-36.8 36.8zm276.8 240H348V307.4c0-24.4-3.2-55.6-36.4-55.6-34 0-39.6 26.4-39.6 54v102.4h-60v-208h56v28h1.6c8.8-16 29.2-28.4 61.2-28.4 66 0 77.6 38 77.6 94.4v114z"></path>
					</svg>
				</a>

				<a
					href="https://github.com/kudretyilmazz"
					aria-label="my github page"
					target="_blank"
					rel="noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 dark:fill-white cursor-pointer"
						width="32"
						height="32"
						viewBox="0 0 32 32"
					>
						<path d="M16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641a15.436 15.436 0 014-.541c1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
					</svg>
				</a>
			</div>
			<span className="text-center my-3 text-sm">{t("FOOTER_COPYRIGHT")} </span>
		</footer>
	);
};

export default Footer;
