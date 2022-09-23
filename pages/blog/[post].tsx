// Import React
import React, { useState, useLayoutEffect } from "react";

// Import Store
import { useAppSelector } from "store/hook";
import { allPosts } from "store/reducers/currentPostReducer";

// Import Next
import { useRouter } from "next/router";

// Import Layout
import Layout from "layout/Layout";

// Import Util
import { dateReableFormatter } from "utils/dateUtils";

// RichText Renderer
import { RichText } from "@graphcms/rich-text-react-renderer";

const Post = () => {
	// useStates
	const [currentPost, setCurrentPost] = useState<any>(null);

	// Variables
	const router = useRouter();
	const allPostData = useAppSelector(allPosts);

	// Functions
	const findMyPost = async () => {
		const filteredPost: any =
			allPostData && (await allPostData?.filter((item: any) => item?.slug === router.query.post));

		filteredPost && setCurrentPost(filteredPost[0]);
	};

	// useLayoutEffect
	useLayoutEffect(() => {
		findMyPost();
	});

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
				<div id="content" className="content w-full">
					{currentPost && (
						<RichText
							content={currentPost?.content?.raw?.children}
							renderers={{
								a: ({ children, href, openInNewTab }) => (
									<a
										className="text-secondary"
										href={href}
										target={openInNewTab ? "_blank" : ""}
										rel="noreferrer"
									>
										{children}
									</a>
								),
							}}
						/>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default Post;
