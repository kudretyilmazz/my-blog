// Import Translation
import useTranslation from "next-translate/useTranslation";

export const useTranslate = (string: string, translationPath?: string) => {
	// Variables
	const { t } = useTranslation(translationPath ? translationPath : "translation");

	return t(string);
};
