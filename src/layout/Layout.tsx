// Import React
import React from "react";

// Import Next
import Head from "next/head";
import { useRouter } from "next/router";

// Import Project Data
import project from "project.json";

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

	// Variables
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
				<meta name="keywords" content={keywords ? keywords : project.keywords} />
				<meta name="author" content={project.author} />
				<meta property="og:image" content="/images/hero-image.jpeg" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={router.asPath} />
				<meta property="og:site_name" content={`${title} ${project.title_suffix}`} />
				<meta property="og:locale" content={router.locale} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={project.twitter} />
				<meta name="twitter:creator" content={project.twitter} />
				<meta name="twitter:url" content={router.asPath} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content="/images/hero-image.jpeg" />
			</Head>

			<Header />
			<main className="w-full flex-1 flex items-center justify-center pb-10 pt-3" role="main">
				<motion.div
					className="w-full h-full flex justify-center items-center"
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
		</>
	);
};

export default Layout;
