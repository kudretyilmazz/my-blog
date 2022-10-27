import { GraphQLClient } from "graphql-request";

const apiUrl: string = process.env.NEXT_PUBLIC_END_POINT ?? "";

export const graphcms = new GraphQLClient(apiUrl, {
	headers: {},
});
