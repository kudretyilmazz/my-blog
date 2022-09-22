// Import Next
import Image from "next/image";

// Import Translation
import useTranslation from "next-translate/useTranslation";

// Import Layout
import Layout from "../layout/Layout";

// Images
import heroImg from "/public/images/hero-image.jpeg";

const Home = () => {
	// Variables
	const { t } = useTranslation("home");

	return (
		<>
			<Layout title="Anasayfa" description="Kişisel bloğum ve portfolyom, özgeçmişim">
				<>
					{/* HERO SECTION */}
					<section id="hero" className="grid grid-cols-5  max-w-[1000px] mx-auto px-3 ">
						<div id="left" className="col-span-5 md:col-span-3  mb-5 mx-auto order-2 md:order-1">
							<h2 className="md:text-4xl md:text-left font-bold text-primary text-center text-2xl dark:text-white">
								{t("HERO_TITLE")}
							</h2>
							<h2 className="md:text-3xl md:text-left  text-primary text-center text-2xl dark:text-white">
								{t("HERO_JOB")}
							</h2>
							<p className="text-lg my-10 text-primary text-center md:text-left dark:text-white">
								{t("HERO_DESCRIPTION")}
							</p>
							<div className="flex justify-center md:justify-start">
								<button className="px-6 py-3 bg-secondary text-white font-medium rounded-sm duration-500 transition hover:scale-105 ">
									<a href="/images/cv.pdf" download="kudret_yilmaz_cv">
										{t("DOWNLOAD_CV")}
									</a>
								</button>
							</div>
						</div>
						<div
							id="right"
							className="col-span-5 md:col-span-2 mb-4 rounded-full px-10 order-1 md:order-2"
						>
							<Image src={heroImg} alt="hero" className="rounded-full" width={400} height={400} />
						</div>
					</section>

					{/* RECENT POST SECTION */}
					{/* <section id="recentPost" className="bg-thirty dark:bg-black mx-auto py-5  px-3">
						<div className="max-w-[1000px] mx-auto">
							<div id="posts-head" className="flex justify-between items-center mt-5">
								<h2 className="text-primary text-xl  dark:text-white ">Son yazılar</h2>
								<span
									onClick={() => router.push("/blog")}
									className="text-sm cursor-pointer text-lighttext dark:text-white "
								>
									View all
								</span>
							</div>
							<div id="posts" className="grid grid-cols-2 gap-x-20 gap-y-5 mt-5">
								<div
									id="post-card"
									className="bg-white dark:bg-gray-500 col-span-2 md:col-span-1 rounded h-64 py-6 px-3 "
								>
									<h3 className="text-3xl font-bold">Making a design system from scratch</h3>
									<span className="text-lg my-5 block">12 Feb 2020 | Desing, Pattern</span>
									<p className="line-clamp-3">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
										officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
										nostrud amet.asdasdasdsssssssssssssssssa consequat duis enim velit mollit.
										Exercitation veniam consequat sunt nostrud amet.asdasdasdsssssssssssssssss
									</p>
								</div>
								<div
									id="post-card"
									className="bg-white dark:bg-gray-500 col-span-2 md:col-span-1 rounded h-64 py-6 px-3 "
								>
									<h3 className="text-3xl font-bold">Making a design system from scratch</h3>
									<span className="text-lg my-5 block">12 Feb 2020 | Desing, Pattern</span>
									<p className="line-clamp-3 ">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
										officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
										nostrud amet.
									</p>
								</div>
							</div>
						</div>
					</section> */}

					{/* FEATURED WORKS SECTION */}
					{/* <section id="featured-works" className="mx-auto py-5 max-w-[1000px] px-3">
						<h2 className="text-xl my-5">Featured Works</h2>
						<div id="work-card" className="grid grid-cols-5 gap-y-10">
							<div id="img" className="col-span-5 md:col-span-2">
								<Image src={postImg} width={400} height={180} alt="postimg" className="w-full" />
							</div>
							<div id="content" className="col-span-5 md:col-span-3 ml-5">
								<h3 className="text-3xl font-bold ">Vibrant Portraits of 2020</h3>
								<div className="flex gap-x-4 my-4 ">
									<span className="bg-primary text-white text-sm px-2 py-1 rounded-full">2022</span>
									<span className="text-lighttext text-lg">Web</span>
								</div>
								<p className="line-clamp-3 ">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
									nostrud amet.
								</p>
							</div>
						</div>
						<div id="work-card" className="grid grid-cols-5 my-4">
							<div id="img" className="col-span-5 md:col-span-2">
								<Image src={postImg} width={400} height={180} alt="postimg" className="w-full" />
							</div>
							<div id="content" className="col-span-5 md:col-span-3 ml-5">
								<h3 className="text-3xl font-bold ">Vibrant Portraits of 2020</h3>
								<div className="flex gap-x-4 my-4 ">
									<span className="bg-primary text-white text-sm px-2 py-1 rounded-full">2022</span>
									<span className="text-lighttext text-lg">Web</span>
								</div>
								<p className="line-clamp-3 ">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
									nostrud amet.
								</p>
							</div>
						</div>
						<div id="work-card" className="grid grid-cols-5 my-4">
							<div id="img" className="col-span-5 md:col-span-2">
								<Image src={postImg} width={400} height={180} alt="postimg" className="w-full" />
							</div>
							<div id="content" className="col-span-5 md:col-span-3 ml-5">
								<h3 className="text-3xl font-bold ">Vibrant Portraits of 2020</h3>
								<div className="flex gap-x-4 my-4 ">
									<span className="bg-primary text-white text-sm px-2 py-1 rounded-full">2022</span>
									<span className="text-lighttext text-lg">Web</span>
								</div>
								<p className="line-clamp-3 ">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
									nostrud amet.
								</p>
							</div>
						</div>
					</section> */}
				</>
			</Layout>
		</>
	);
};

export default Home;
