export const dateReableFormatter = (date: string, locale?: string) => {
	const dateLocale = locale ? (locale === "tr" ? "tr-TR" : "en-EN") : "en-EN";
	return new Date(date).toLocaleDateString(dateLocale, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
