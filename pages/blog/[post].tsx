// Import React
import React from "react";

// Import Client
import { getSinglePost } from "client/getSinglePost";

// Import Next
import { useRouter } from "next/router";

// Import Layout
import Layout from "layout/Layout";

// Import Util
import { dateReableFormatter } from "utils/dateUtils";

const Post = (props: any) => {
	// Variables
	const router = useRouter();
	console.log(props.content[0], "asdsad");
	const currentPost = props.content[0];

	return (
		<Layout title="Post">
			<section id="blog" className="mx-auto py-5 px-3 max-w-[1000px] w-full ">
				<h1 className="text-center md:text-left"> {currentPost?.title} </h1>
				<div id="info" className="my-10 text-center md:text-left">
					<span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
						{dateReableFormatter(currentPost?.createdAt, router.locale)}
					</span>
					<span className="mx-3">|</span>
					<span> {currentPost?.category?.map((item: string) => item)} </span>
				</div>
				<div
					id="content"
					dangerouslySetInnerHTML={{ __html: currentPost.content.html }}
					className="content w-full"
				></div>
			</section>
		</Layout>
	);
};

export default Post;

export const getServerSideProps = async (context: any) => {
	const { post } = context.params;
	const content = await getSinglePost(post);
	return {
		props: {
			content,
		},
	};
};
