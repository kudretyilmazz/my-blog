// Import React
import React, { useState } from "react";

// Import Next
import { useRouter } from "next/router";

// Import Client
import { getAllPosts } from "src/client/getAllPosts";

// Import Layout
import Layout from "layout/Layout";

// Import Components
import PostCard from "src/components/PostCard";
import Pagination from "src/components/Pagination";

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
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(5);

	// Variables
	const router = useRouter();

	// Pagination calculator
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = Array.isArray(posts) && posts?.slice(indexOfFirstPost, indexOfLastPost);

	// Functions
	const goPost = (slug: string) => {
		router.push(`blog/${slug}`);
	};
	return (
		<Layout title="Blog" description="Front-end geliştirme ile ilgili blog yazılırım">
			<section id="blog" className="mx-auto px-3 max-w-[1000px] w-full">
				<h1>Blog</h1>
				<div id="posts" className="mt-8 w-full">
					{currentPosts &&
						currentPosts?.map((item: postTypes, index: number) => (
							<PostCard item={item} key={index} />
						))}
				</div>
				<div className="mx-auto w-full">
					<Pagination
						totalPosts={posts?.length}
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
