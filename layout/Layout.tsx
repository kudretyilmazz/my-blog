// Import React
import React from "react";

// Import Next
import { useRouter } from "next/router";
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
}

const Layout = (props: LayoutProps) => {
	// Props Destruction
	const { children, title, description } = props;

	const router = useRouter();

	return (
		<>
			<Head>
				<title>
					{title} | {project.title_suffix}
				</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content={title} key="title" />
				<meta name="description" content={description} />
				<meta name="keywords" content={project.keywords} />
				<meta name="author" content={project.author} />
			</Head>
			<div className={router.pathname !== "/blog/[post]" ? "h-[100vh]" : ""}>
				<div className="flex flex-col items-center justify-center h-full">
					<Header />
					<main className="w-full h-[calc(100%_-_124px) my-auto  flex items-center justify-center pb-10 pt-3">
						<motion.div
							className="w-full"
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
