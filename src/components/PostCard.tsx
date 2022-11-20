// Import Next
import { useRouter } from "next/router";

// Import Util
import { dateReableFormatter } from "src/utils/dateUtils";

interface postTypes {
	id: string;
	category: string[];
	createdAt: string;
	slug: string;
	title: string;
}

interface PostCardProps {
	item: postTypes;
}

function PostCard(props: PostCardProps) {
	// Prop Destruction
	const { item } = props;

	// Variables
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push(`blog/${item.slug}`);
			}}
			id="work-card"
			className="rounded-md my-4 bg-thirty dark:bg-primary px-5 hover:scale-105 duration-500  cursor-pointer transition flex items-center justify-between"
		>
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
	);
}

export default PostCard;
