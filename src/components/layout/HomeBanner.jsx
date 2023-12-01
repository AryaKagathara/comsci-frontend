import Link from "next/link";
import Image from "next/image";
import Banner from "@/assets/images/banner-bg.webp";
import mobileBanner from "@/assets/images/banner-bg-mobile.webp";
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
					<div className="banner_textbox">
						<p>Design & Development Company</p>
						<h1>We help business evolve</h1>
						<PrimaryBtn name="Learn Now" arrow="no" link="/" />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;