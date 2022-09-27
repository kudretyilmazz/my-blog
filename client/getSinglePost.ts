import { gql } from "graphql-request";
import { graphcms } from "./client";

export const getSinglePost = async (slug: any) => {
	const getSinglePostQuery = gql`
		{
			blogposts(where: {slug: "${slug}"}) {
                id
				title
				category
				createdAt
				slug
				content {
					html
				}
				tags
				description
				
              }
		}
	`;

	const { blogposts } = await graphcms.request(getSinglePostQuery);

	return blogposts;
};
