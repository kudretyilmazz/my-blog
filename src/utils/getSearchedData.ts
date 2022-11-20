// Import Utils
import { removeAccents } from "./stringUtils";

export const getSearchedData = (search: string, dataValues: string[], data: unknown[]) => {
	if (data && Array.isArray(data)) {
		const filter = data?.filter((item: any) =>
			dataValues
				?.map(value => item?.[value]?.toString())
				?.some(item => !!item && removeAccents(item)?.includes(removeAccents(search)))
		);

		return filter?.length ? filter : [];
	} else {
		return [];
	}
};
