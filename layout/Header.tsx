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

// Import Flag Icon
import TurkishFlag from "./_partials/TurkishFlag";
import EnglishFlag from "./_partials/EnglishFlag";

// Import Menu Icon
import { Divide as Hamburger } from "hamburger-react";

const Header: NextComponentType = () => {
	// Variables
	const { t } = useTranslation("translation");
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	// useStates
	const [activeLang, setActiveLang] = useState<string | undefined>(router.locale);
	const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

	// Functions
	const langSwitcher = () => {
		setActiveLang(activeLang === "en" ? "tr" : "en");
		setLanguage(activeLang === "en" ? "tr" : "en");
	};

	return (
		<header className="flex items-center justify-between h-20 max-w-[1200px] mx-auto w-full px-3 z-10 mb-auto">
			<div className="flex items-center ">
				<div className="mr-4 ml-3 " onClick={langSwitcher}>
					{router.locale === "tr" ? <TurkishFlag /> : <EnglishFlag />}
				</div>

				<div>
					<DarkModeSwitch
						size={20}
						checked={theme === "dark"}
						moonColor={"#ffc845"}
						sunColor={"#ffc845"}
						onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
					/>
				</div>
			</div>
			<div className="md:hidden">
				<div role="checkbox" aria-checked={isMobileOpen}>
					<Hamburger size={20} toggled={isMobileOpen} toggle={setIsMobileOpen} />
				</div>

				<nav
					className={`${isMobileOpen ? "opacity-100" : "opacity-0"} flex transition-all`}
					role="navigation"
				>
					<ul
						role="menu"
						className={`flex dark:bg-primary bg-white w-full  absolute left-0 h-40 z-10 flex-col justify-evenly items-center  `}
					>
						{menu?.map((item: { title: string; url: string }, index) => {
							return (
								<li
									role="menuitem"
									key={index}
									className="font-bold select-none cursor-pointer flex justify-center items-center w-full h-full border-b-2 border-lighttext  first:border-t-2 "
								>
									<Link href={item?.url} className="w-full h-full">
										<span
											className={`w-full h-full flex justify-center items-center ${
												router.asPath.includes(item?.url)
													? router.asPath !== "/" && item?.title === "HOME"
														? ""
														: "text-secondary dark:text-secondary"
													: ""
											}`}
										>
											{t(`COMMON.${item?.title}`)}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
			<nav className="hidden md:flex" role="navigation">
				<ul className=" md:flex md:gap-x-10">
					{menu?.map((item: { title: string; url: string }, index) => {
						return (
							<li key={index} className="font-bold select-none transition cursor-pointer ">
								<Link href={item?.url}>
									<span
										className={
											router.asPath.includes(item?.url)
												? router.asPath !== "/" && item?.title === "HOME"
													? " hover:text-lighttext dark:hover:text-white "
													: "text-secondary  dark:text-secondary"
												: "hover:text-lighttext dark:hover:text-white "
										}
									>
										{t(`COMMON.${item?.title}`)}
									</span>
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
