import { gql } from "graphql-request";
import { graphcms } from "./client";
import { store } from "store/store";

export const getSinglePost = async (id: any) => {
	const getSinglePostQuery = gql`
		{
			blogposts(where: {id: "${id}"}) {
                id
				title
				category
				createdAt
				slug
				content {
					raw
				}
				tags
				description
				
              }
		}
	`;

	const { blogposts } = await graphcms.request(getSinglePostQuery);

	return blogposts;
};
