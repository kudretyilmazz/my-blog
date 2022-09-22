import { gql } from "graphql-request";
import { graphcms } from "./client";

export const getCV = async () => {
	const getCVQuery = gql`
		{
			cvs {
				cv {
					url
				}
			}
		}
	`;

	const { cvs } = await graphcms.request(getCVQuery);

	return cvs;
};
