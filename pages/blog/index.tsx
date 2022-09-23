// Import React
import React, { useState, useEffect } from "react";

// Import Store
import { useAppSelector } from "store/hook";
import { allPosts } from "store/reducers/currentPostReducer";

// Import Next
import { useRouter } from "next/router";

// Import Layout
import Layout from "layout/Layout";

// Import Util
import { dateReableFormatter } from "utils/dateUtils";

// Import Components
import Pagination from "components/Pagination";

interface BlogProps {
	posts?: any;
}

const Index = (props: BlogProps) => {
	// useStates
	const [posts, setPosts] = useState<any>(null);
	const postdata = useAppSelector(allPosts);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(5);

	// Variables
	const router = useRouter();

	// Pagination calculator
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currenPost = Array.isArray(posts) && posts.slice(indexOfFirstPost, indexOfLastPost);

	// Functions
	const goPost = (slug: string) => {
		router.push(`blog/${slug}`);
	};

	useEffect(() => {
		setPosts(postdata);
	}, [postdata]);

	return (
		<Layout title="Blog" description="Front-end ile ilgili blog yazılırım">
			<section id="blog" className="mx-auto px-3 max-w-[1000px] w-full">
				<h1 className="t font-bold ">Blog</h1>
				<div id="posts" className="mt-8 w-full">
					{currenPost &&
						currenPost?.map((item: any) => {
							return (
								<div
									onClick={() => goPost(item?.slug)}
									key={item?.id}
									id="work-card"
									className="rounded-md my-4 bg-thirty dark:bg-primary px-5 hover:scale-105 duration-500  cursor-pointer transition"
								>
									<div id="content" className="ml-5 flex items-center justify-between">
										<h3 className="font-bold ">{item?.title}</h3>
										<div className="flex gap-x-4 my-4 ">
											<span> {dateReableFormatter(item?.createdAt, router.locale)}</span>
											<span>|</span>
											<span className="text-lighttext">
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

// export const getServerSideProps = async () => {
// 	const posts = await getAllPosts();
// 	return {
// 		props: {
// 			posts,
// 		},
// 	};
// };
