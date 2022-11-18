// Import React
import { useLayoutEffect } from "react";

// Import Client
import { getAllPosts } from "client/getAllPosts";

// Import Store
import { Provider } from "react-redux";
import { store } from "store/store";

// Import Next Theme
import { ThemeProvider } from "next-themes";

// Import Progress Bar
import NextNProgress from "nextjs-progressbar";

// Import Type
import type { AppProps } from "next/app";

// Global Style
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
	// useEffect
	useLayoutEffect(() => {
		getAllPosts();
	}, []);
	return (
		<Provider store={store}>
			<ThemeProvider attribute="class">
				<NextNProgress color="#ff3c41" startPosition={0.3} stopDelayMs={200} height={3} />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
