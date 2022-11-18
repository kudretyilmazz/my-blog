// Import React
import React from "react";

// Import Next
import Link from "next/link";

// Import Layout
import Layout from "layout/Layout";

// Import Utils
import { useTranslate } from "utils/translate";

// Import Components
import Button from "components/Button";

const Custom404 = () => {
	return (
		<Layout title={useTranslate("COMMON.404")} description={useTranslate("COMMON.404")}>
			<div className="flex flex-col gap-y-5 justify-center items-center">
				<h1> {useTranslate("COMMON.404")} </h1>
				<Button label="COMMON.RETURN_HOME" push="/" />
			</div>
		</Layout>
	);
};

export default Custom404;
