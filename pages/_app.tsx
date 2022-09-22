// Import Next Theme
import { ThemeProvider } from "next-themes";

// Import Type
import type { AppProps } from "next/app";

// Global Style
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
