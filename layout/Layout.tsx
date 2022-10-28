// Import React
import React from "react";

// Import Next
import Head from "next/head";

// Import Project Data
import project from "../project.json";

// Import Partials
import Footer from "./Footer";
import Header from "./Header";

// Import Framer Motion
import { motion } from "framer-motion";

interface LayoutProps {
	children?: JSX.Element;
	title?: string;
	description?: string;
	keywords?: string;
}

const Layout = (props: LayoutProps) => {
	// Props Destruction
	const { children, title, description, keywords } = props;

	return (
		<>
			<Head>
				<title>
					{title} | {project.title_suffix}
				</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content={title} key="title" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords ? keywords : project.keywords} />
				<meta name="author" content={project.author} />
			</Head>
			<div>
				<div className="flex flex-col items-center justify-center h-full min-h-screen">
					<Header />
					<main className="w-full flex-1  flex items-center justify-center pb-10 pt-3">
						<motion.div
							className="w-full h-full"
							variants={{
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
							}}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.5 }}
						>
							{children}
						</motion.div>
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
