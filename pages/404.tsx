// Import React
import React from "react";

// Import Next
import Link from "next/link";

// Import Layout
import Layout from "layout/Layout";

// Import Translation
import useTranslation from "next-translate/useTranslation";

const Custom404 = () => {
	// Variables
	const { t } = useTranslation("common");
	return (
		<Layout title={t("404")} description={t("404")}>
			<div className="flex flex-col gap-y-5 justify-center items-center">
				<h1> {t("404")} </h1>
				<button
					role="button"
					aria-label={t("RETURN_HOME")}
					className="px-6 py-3 bg-secondary text-white font-regular rounded-full duration-500 transition hover:scale-105 "
				>
					<Link href="/">{t("RETURN_HOME")}</Link>
				</button>
			</div>
		</Layout>
	);
};

export default Custom404;
