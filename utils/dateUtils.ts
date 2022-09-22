// Import Next
import { useRouter } from "next/router";

export const useReadableDateFormatter = (date: any) => {
	// Variables
	const router = useRouter();

	return new Date(date).toLocaleDateString(router.locale === "tr" ? "tr-TR" : "en-EN", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
