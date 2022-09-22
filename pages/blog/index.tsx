// Import React
import React from "react";

// Import Next
import { useRouter } from "next/router";

// Import Layout
import Layout from "layout/Layout";

// Import Util
import { dateReableFormatter } from "utils/dateUtils";

// Import Request
import { getAllPosts } from "client/getAllPosts";

interface BlogProps {
	posts: any;
}

const Index = (props: BlogProps) => {
	// Props Destruction
	const { posts } = props;

	// Variables
	const router = useRouter();

	console.log(posts);

	return (
		<Layout title="Blog" description="Front-end ile ilgili blog yazılırım">
			<section id="blog" className="mx-auto px-3 max-w-[1000px] w-full">
				<h1 className="t font-bold ">Blog</h1>
				<div id="posts" className="mt-8 w-full">
					{posts &&
						posts.reverse().map((item: any) => {
							return (
								<div
									onClick={() => router.push(`blog/${item?.id}`)}
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
			</section>
		</Layout>
	);
};

export default Index;

export const getStaticProps = async () => {
	const posts = await getAllPosts();
	return {
		props: {
			posts,
		},
	};
};
