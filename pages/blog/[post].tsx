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

// Import Next-Share
import {
	FacebookShareButton,
	FacebookIcon,
	RedditShareButton,
	RedditIcon,
	TelegramShareButton,
	TelegramIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "next-share";

interface PostProps {
	content: Record<string, any>[];
}

const Post = (props: PostProps) => {
	// Variables
	const router = useRouter();
	const currentPost = props.content[0];

	return (
		<Layout
			title={currentPost?.title}
			description={currentPost?.description}
			keywords={currentPost?.tags}
		>
			<section id="blog" className="mx-auto py-5 px-3 max-w-[1000px] w-full ">
				<h1 className="text-center md:text-left"> {currentPost?.title} </h1>
				<div className="my-10 flex items-center justify-between flex-col md:flex-row ">
					<div id="info" className="">
						<span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
							{dateReableFormatter(currentPost?.createdAt, router.locale)}
						</span>
						<span className="mx-3">|</span>
						<span> {currentPost?.category?.map((item: string) => item)} </span>
					</div>
					<div className="flex gap-x-1 mt-4 md:mt-0">
						<RedditShareButton
							url={`https://kudretyilmaz.me/blog/${currentPost.slug}`}
							title={currentPost?.title}
						>
							<RedditIcon size={32} round />
						</RedditShareButton>

						<TelegramShareButton
							url={`https://kudretyilmaz.me/blog/${currentPost.slug}`}
							title={currentPost?.title}
						>
							<TelegramIcon size={32} round />
						</TelegramShareButton>
						<WhatsappShareButton
							url={`https://kudretyilmaz.me/blog/${currentPost.slug}`}
							title={currentPost?.title}
							separator=":: "
						>
							<WhatsappIcon size={32} round />
						</WhatsappShareButton>
						<FacebookShareButton
							url={`https://kudretyilmaz.me/blog/${currentPost.slug}`}
							quote={currentPost?.title}
							hashtag={`#${currentPost?.title}`}
						>
							<FacebookIcon size={32} round />
						</FacebookShareButton>
						<TwitterShareButton
							url={`https://kudretyilmaz.me/blog/${currentPost.slug}`}
							title={currentPost?.title}
						>
							<TwitterIcon size={32} round />
						</TwitterShareButton>

						<LinkedinShareButton url={`https://kudretyilmaz.me/blog/${currentPost.slug}`}>
							<LinkedinIcon size={32} round />
						</LinkedinShareButton>
					</div>
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
