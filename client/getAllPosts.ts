import { gql } from "graphql-request";
import { graphcms } from "./client";
import { store } from "store/store";
import { setAllPosts } from "store/reducers/currentPostReducer";

export const getAllPosts = async () => {
	const getAllPostsQuery = gql`
		{
			blogposts {
				id
				title
				content {
					raw
				}
				category
				createdAt
				slug
			}
		}
	`;

	const { blogposts } = await graphcms.request(getAllPostsQuery);
	store.dispatch(setAllPosts(blogposts));
	return blogposts;
};
