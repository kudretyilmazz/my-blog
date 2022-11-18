// Import Next
import Image from "next/image";

// Import Utils
import { useTranslate } from "src/utils/translate";

// Import Layout
import Layout from "../layout/Layout";

// Import Components
import Button from "src/components/Button";

// Images
import heroImg from "/public/images/hero-image.jpeg";

const Home = () => {
	return (
		<>
			<Layout
				title={useTranslate("HOME.HOMEPAGE")}
				description="Kişisel bloğum ve portfolyom, özgeçmişim"
			>
				<>
					{/* HERO SECTION */}
					<section id="hero" className="grid grid-cols-5 max-w-[1000px] mx-auto px-3">
						<div id="left" className="col-span-5 md:col-span-3  mb-5 mx-auto order-2 md:order-1">
							<h2 className=" text-center md:text-left ">{useTranslate("HOME.HERO_TITLE")}</h2>
							<h2 className="md:text-3xl md:text-left font-normal  text-center text-2xl ">
								{useTranslate("HOME.HERO_JOB")}
							</h2>

							<p className="text-lg my-10  text-center md:text-left ">
								{useTranslate("HOME.HERO_DESCRIPTION")}
							</p>
							<div className="flex justify-center md:justify-start">
								<Button
									label="HOME.DOWNLOAD_CV"
									customLink={{ url: "/images/cv.pdf", props: { download: "kudret_yilmaz_cv" } }}
								/>
							</div>
						</div>
						<div
							id="right"
							className="col-span-5 md:col-span-2 mb-4 rounded-full px-10 order-1 md:order-2"
						>
							<Image src={heroImg} alt="hero" className="rounded-full" width={400} height={400} />
						</div>
					</section>
				</>
			</Layout>
		</>
	);
};

export default Home;
