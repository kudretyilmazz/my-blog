// Import React
import React from "react";

// Import Translation
import useTranslation from "next-translate/useTranslation";

// Import Layout
import Layout from "layout/Layout";

const Index = () => {
	// Variables
	const { t } = useTranslation("about");
	return (
		<Layout title="Hakkımda" description="Hakkımda ve iletişim bilgilerim">
			<div id="about" className="mx-auto py-5 px-3 max-w-[1000px]">
				<h1> {t("ABOUT_TITLE")} </h1>
				<div className="mt-16">
					<div className="bio">
						<div className="flex justify-between items-center">
							<h4> {t("SHORT_CV")} </h4>

							<button className="px-2 py-1 bg-secondary text-white font-medium rounded-sm duration-500 transition hover:scale-105 ">
								<a href="/images/cv.pdf" download="kudret_yilmaz_cv">
									{t("DOWNLOAD_CV")}
								</a>
							</button>
						</div>
						<p className="mt-3">{t("CV_DESCRIPTION")}</p>
					</div>
					<div className="contact mt-5">
						<h4> {t("CONTACT_INFORMATION")} </h4>
						<div id="contact-adress" className="mt-3">
							<div className="flex items-center gap-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4 dark:fill-white cursor-pointer"
									viewBox="0 0 448 512"
								>
									<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" />
								</svg>
								<span>
									<a href="mailto:kudretylmzzz@gmail.com">kudretylmzzz@gmail.com</a>
								</span>
							</div>
							<div className="flex items-center gap-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 dark:fill-white cursor-pointer"
									viewBox="0 0 448 512"
								>
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
								</svg>
								<span>
									<a
										href="https://www.linkedin.com/in/kudretyilmaz/"
										target="_blank"
										rel="noreferrer"
									>
										linkedin.com/in/kudretyilmaz
									</a>
								</span>
							</div>
							<div className="flex items-center gap-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 dark:fill-white cursor-pointer"
									viewBox="0 0 448 512"
								>
									<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
								</svg>
								<span>
									<a href="https://github.com/kudretyilmazz" target="_blank" rel="noreferrer">
										github.com/kudretyilmazz
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
