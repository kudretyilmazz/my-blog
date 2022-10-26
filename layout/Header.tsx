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

import { motion, AnimatePresence } from "framer-motion";
// Import Dark Mode Switch
import { DarkModeSwitch } from "react-toggle-dark-mode";

// Import Flag Icon
import TurkishFlag from "./_partials/TurkishFlag";
import EnglishFlag from "./_partials/EnglishFlag";

// Import Menu Icon
import { Divide as Hamburger } from "hamburger-react";

const Header: NextComponentType = () => {
	// Variables
	const { t } = useTranslation("common");
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	// useStates
	const [activeLang, setActiveLang] = useState(router.locale);
	const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

	// Functions
	const themeSwitcher = () => {
		setActiveLang(activeLang === "en" ? "tr" : "en");
		setLanguage(activeLang === "en" ? "tr" : "en");
	};

	return (
		<header className="flex items-center justify-between h-20 max-w-[1200px] mx-auto w-full px-3">
			<div className="flex items-center ">
				<div className="mr-4 ml-3 " onClick={themeSwitcher}>
					{router.locale === "tr" ? <TurkishFlag /> : <EnglishFlag />}
				</div>

				<div>
					<DarkModeSwitch
						sunColor="#202020"
						moonColor="#f2f2f2"
						size={20}
						checked={theme === "dark"}
						onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
					/>
				</div>
			</div>
			<div className="md:hidden transition-all">
				<div>
					<Hamburger size={20} toggled={isMobileOpen} toggle={setIsMobileOpen} />
				</div>

				<nav className={`${isMobileOpen ? "flex" : "hidden"} transition-all`}>
					<ul
						className={`flex bg-white w-full  absolute left-0 h-40 z-10 flex-col justify-evenly items-center  `}
					>
						{menu?.map((item: any, index) => {
							return (
								<li
									key={index}
									className="font-bold select-none cursor-pointer flex justify-center items-center w-full h-full border-b-2 last:border-black"
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
			</div>
			<nav className="hidden md:flex">
				<ul className=" md:flex md:gap-x-10">
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
