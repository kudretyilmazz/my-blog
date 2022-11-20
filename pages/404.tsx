// Import React
import React from "react";

// Import Layout
import Layout from "src/layout/Layout";

// Import Utils
import { useTranslate } from "src/utils/translate";

// Import Components
import Button from "src/components/Button";

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
