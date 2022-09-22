import { GraphQLClient } from "graphql-request";

const apiUrl: any = process.env.NEXT_PUBLIC_END_POINT;

export const graphcms = new GraphQLClient(apiUrl, {
	headers: {},
});
