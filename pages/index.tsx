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
			<Layout title={t("HOMEPAGE")} description="Kişisel bloğum ve portfolyom, özgeçmişim">
				<>
					{/* HERO SECTION */}
					<section id="hero" className="grid grid-cols-5 max-w-[1000px] mx-auto px-3 ">
						<div id="left" className="col-span-5 md:col-span-3  mb-5 mx-auto order-2 md:order-1">
							<h2 className=" text-center md:text-left ">{t("HERO_TITLE")}</h2>
							<h2 className="md:text-3xl md:text-left font-normal  text-center text-2xl ">
								{t("HERO_JOB")}
							</h2>
							<p className="text-lg my-10  text-center md:text-left ">{t("HERO_DESCRIPTION")}</p>
							<div className="flex justify-center md:justify-start">
								<button className="px-6 py-3 bg-secondary text-white font-regular rounded-full duration-500 transition hover:scale-105 ">
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
				</>
			</Layout>
		</>
	);
};

export default Home;
