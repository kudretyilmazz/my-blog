export const dateReableFormatter = (date: any, locale: any) => {
	const dateLocale = locale ? (locale === "tr" ? "tr-TR" : "en-EN") : "en-EN";
	return new Date(date).toLocaleDateString(dateLocale, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
