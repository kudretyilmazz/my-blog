// Import Store
import { Provider } from "react-redux";
import { store } from "src/store/store";

// Import Next Theme
import { ThemeProvider } from "next-themes";

// Import Progress Bar
import NextNProgress from "nextjs-progressbar";

// Import Type
import type { AppProps } from "next/app";

// Global Style
import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
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
