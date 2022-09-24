// Import React
import React, { useState } from "react";

// Import Next
import Link from "next/link";
import { NextComponentType } from "next";
import { useRouter } from "next/router";

// Import Translation
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

// Import Next Theme
import { useTheme } from "next-themes";

// Import Menu
import { menu } from "./menu";

// Import Dark Mode Switch
import { DarkModeSwitch } from "react-toggle-dark-mode";

import TurkishFlag from "./_partials/TurkishFlag";
import EnglishFlag from "./_partials/EnglishFlag";

const Header: NextComponentType = () => {
	// Variables
	const { t } = useTranslation("common");
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	// useStates
	const [activeLang, setActiveLang] = useState(router.locale);

	// Functions
	const themeSwitcher = () => {
		setActiveLang(activeLang === "en" ? "tr" : "en");
		setLanguage(activeLang === "en" ? "tr" : "en");
	};

	return (
		<header className="flex items-center justify-between h-20 max-w-[1200px] mx-auto w-full px-3">
			<div className="flex items-center ">
				<div className="mr-4 transition" onClick={themeSwitcher}>
					{router.locale === "tr" ? <TurkishFlag /> : <EnglishFlag />}
				</div>

				<div>
					<DarkModeSwitch
						size={20}
						checked={theme === "dark"}
						onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
					/>
				</div>
			</div>
			<nav>
				<ul className="flex gap-x-6 md:gap-x-10">
					{menu?.map((item: any, index) => {
						return (
							<li
								key={index}
								className="font-bold select-none transition cursor-pointer hover:text-lighttext"
							>
								<Link href={item?.url}>
									<a
										className={
											router.asPath.includes(item?.url)
												? router.asPath !== "/" && item?.title === "HOME"
													? ""
													: "text-secondary"
												: ""
										}
									>
										{t(item?.title)}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
