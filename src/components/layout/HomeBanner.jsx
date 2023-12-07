import Link from "next/link";
import Image from "next/image";
import Banner from "@/../public/images/banner-bg.webp";
import mobileBanner from "@/../public/images/banner-bg-mobile.webp";
import PrimaryBtn from '@/components/layout/PrimaryBtn';



const HomeBanner = () => {
	return (
		<>
			<div className="banner">
				<div className="banner_bg_img">
					<Image src={Banner} alt="Banner" />
				</div>
				<div className="mobile_banner_img">
					<Image src={mobileBanner} alt="mobileBanner" />
				</div>
				<div className="container">
					<div className="banner_textbox" data-scroll data-scroll-speed=".2">
						<p className="fadeInUp">Design & Development Company</p>
						<h1 className="fadeInUp">We help business evolve</h1>
						<PrimaryBtn name="Learn Now" arrow="no" link="/" isFadeInUp="true"  />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;