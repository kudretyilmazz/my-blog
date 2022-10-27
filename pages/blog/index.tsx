// Import React
import React, { useState } from "react";

// Import Next
import { useRouter } from "next/router";

// Import Client
import { getAllPosts } from "client/getAllPosts";

// Import Layout
import Layout from "layout/Layout";

// Import Util
import { dateReableFormatter } from "utils/dateUtils";

// Import Components
import Pagination from "components/Pagination";

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
	posts.reverse();
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = Array.isArray(posts) && posts?.slice(indexOfFirstPost, indexOfLastPost);

	// Functions
	const goPost = (slug: string) => {
		router.push(`blog/${slug}`);
	};

	console.log(currentPosts);
	return (
		<Layout title="Blog" description="Front-end geliştirme ile ilgili blog yazılırım">
			<section id="blog" className="mx-auto px-3 max-w-[1000px] w-full">
				<h1>Blog</h1>
				<div id="posts" className="mt-8 w-full">
					{currentPosts &&
						currentPosts?.map((item: postTypes) => {
							return (
								<div
									onClick={() => goPost(item?.slug)}
									key={item?.id}
									id="work-card"
									className="rounded-md my-4 bg-thirty dark:bg-primary px-5 hover:scale-105 duration-500  cursor-pointer transition"
								>
									<div id="content" className="ml-5 flex items-center justify-between">
										<h3>{item?.title}</h3>
										<div className="flex gap-x-4 my-4 ">
											<span className="hidden md:inline">
												{dateReableFormatter(item?.createdAt, router.locale)}
											</span>
											<span className="hidden md:inline">|</span>
											<span className="text-lighttext hidden md:inline">
												{item?.category?.map((item: string) => item)}
											</span>
										</div>
									</div>
								</div>
							);
						})}
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
