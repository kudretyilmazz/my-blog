import { gql } from "graphql-request";
import { graphcms } from "./client";

export const getAllPosts = async () => {
	const getAllPostsQuery = gql`
		{
			blogposts {
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
				image {
					url
				}
			}
		}
	`;

	const { blogposts } = await graphcms.request(getAllPostsQuery);

	return blogposts;
};
