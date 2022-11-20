// Import React
import React, { useState } from "react";

// Import Client
import { getAllPosts } from "src/client/getAllPosts";

// Import Utils
import { getSearchedData } from "src/utils/getSearchedData";

// Import Layout
import Layout from "src/layout/Layout";

// Import Components
import PostCard from "src/components/PostCard";
import Pagination from "src/components/Pagination";
import Input from "src/components/Input";

interface postTypes {
	id: string;
	category: string[];
	createdAt: string;
	slug: string;
	title: string;
}

interface BlogProps {
	posts: postTypes[];
}

const Index = (props: BlogProps) => {
	// Props Destruction
	const { posts } = props;

	// useStates
	const [search, setSearch] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(5);

	// Pagination calculator

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts =
		Array.isArray(getSearchedData(search, ["title"], posts)) &&
		getSearchedData(search, ["title"], posts)?.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<Layout title="Blog" description="Front-end geliştirme ile ilgili blog yazılırım">
			<section id="blog" className="mx-auto px-3 max-w-[1000px] w-full">
				<h1>Blog</h1>
				<Input
					name="postSearch"
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder="COMMON.SEARCH"
					className="flex-1"
				/>

				<div id="posts" className="mt-8 w-full min-h-[440px]">
					{currentPosts &&
						currentPosts?.map((item: postTypes, index: number) => (
							<PostCard item={item} key={index} />
						))}
				</div>
				<div className="mx-auto w-full">
					<Pagination
						totalPosts={getSearchedData(search, ["title"], posts)?.length || 1}
						postsPerPage={postsPerPage}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</div>
			</section>
		</Layout>
	);
};

export default Index;

export const getServerSideProps = async () => {
	const posts = await getAllPosts();
	return {
		props: {
			posts,
		},
	};
};
