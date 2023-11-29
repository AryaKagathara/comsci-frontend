import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";
import Php from "@/assets/images/php.svg";
import Pythone from "@/assets/images/pythone.svg";
import Javascript from "@/assets/images/javascript.svg";
import Android from "@/assets/images/android.svg";
import Iphone from "@/assets/images/iphone.svg";
import Figma from "@/assets/images/figma.svg";
import Woo from "@/assets/images/woo.svg";
import Wordpress from "@/assets/images/wordpress.svg";
import Photoshop from "@/assets/images/photoshop.svg";
import Ai from "@/assets/images/ai.svg";
import Shopify from "@/assets/images/shopify.svg";
import Laravel from "@/assets/images/laravel.svg";


const Technologies = () => {
	return (
		<>
			<div className="technologies">
				<div className="container">
					<div className="tech_section">
						<div className="text_box">
							<h4>Web agency tools that are carefully selected, and meticulously perfected</h4>
							<ContentBox text="Our arsenal of battle-tested and future-proof web technologies allows us to build websites and web applications that perform seamlessly. We consider scalability, support and price among other things to find the perfect match for your project." />
						</div>
						<div className="technologie_images">
							<div className="row">
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Php} alt="php" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Pythone} alt="pythone" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Javascript} alt="javascript" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Android} alt="android" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Iphone} alt="iphone" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Figma} alt="figma" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Woo} alt="woo" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Wordpress} alt="wordpress" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Photoshop} alt="photoshop" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Ai} alt="ai" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
										<div className="picture">
											<Image src={Shopify} alt="shopify" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-12 col-md-6">
									<div className="images_box">
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
		</>
	)
}

export default Technologies;