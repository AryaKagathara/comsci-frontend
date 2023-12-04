import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";
import Php from "@/../public/images/php.svg";
import Pythone from "@/../public/images/pythone.svg";
import Javascript from "@/../public/images/javascript.svg";
import Android from "@/../public/images/android.svg";
import Iphone from "@/../public/images/iphone.svg";
import Figma from "@/../public/images/figma.svg";
import Woo from "@/../public/images/woo.svg";
import Wordpress from "@/../public/images/wordpress.svg";
import Photoshop from "@/../public/images/photoshop.svg";
import Ai from "@/../public/images/ai.svg";
import Shopify from "@/../public/images/shopify.svg";
import Laravel from "@/../public/images/laravel.svg";


const Technologies = () => {
	return (
		<>
			<div className="technologies">
				<div className="container">
					<div className="tech_section">
						<div className="text_box">
							<ContentBox title="Carefully chosen tools for your needs." />
							<ContentBox text="Our arsenal of battle-tested and future-proof technologies allows us to build websites and applications that perform seamlessly. We consider scalability, support and price among other things to find the perfect match for your project. There’s no limit of what we use in the technology." />
						</div>
						<div className="technologie_images">
							<div className="row">
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Php} alt="php" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Pythone} alt="pythone" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Javascript} alt="javascript" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Android} alt="android" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Iphone} alt="iphone" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Figma} alt="figma" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Woo} alt="woo" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Wordpress} alt="wordpress" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Photoshop} alt="photoshop" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Ai} alt="ai" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Shopify} alt="shopify" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-6 col-md-6 col-lg-4">
									<div className="images_box">
										<div className="wrapper_box">
											<div className="picture">
												<Image src={Laravel} alt="laravel" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Technologies;