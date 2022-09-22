// Import React
import React from "react";

// Import Next
import { useRouter } from "next/router";

// Import Layout
import Layout from "layout/Layout";

// Import Util
import { dateReableFormatter } from "utils/dateUtils";

// Import Query
import { getSinglePost } from "client/getSinglePost";

// RichText Renderer
import { RichText } from "@graphcms/rich-text-react-renderer";

interface PostProps {
	content: any;
}

const Post = (props: PostProps) => {
	// Props Destruction
	const { content } = props;
	const router = useRouter();

	const currentPost = content[0];

	// Variables

	return (
		<Layout title="Post">
			<section id="blog" className="mx-auto py-5 px-3 max-w-[1000px] ">
				<h1 className="text-4xl"> {currentPost?.title} </h1>
				<div id="info" className="my-10">
					<span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
						{dateReableFormatter(currentPost?.createdAt, router.locale)}
					</span>
					<span className="mx-3">|</span>
					<span> {currentPost?.category?.map((item: string) => item)} </span>
				</div>
				<div id="content" className="content">
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

export const getServerSideProps = async (context: any) => {
	const { post } = context.params;
	const content = await getSinglePost(post);
	return {
		props: {
			content,
		},
	};
};
