import Image from "next/image";
import Banner from "@/../public/images/banner-bg.webp";
import mobileBanner from "@/../public/images/banner-bg-mobile.webp";
import Link from "next/link";

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
						<div className='fadeInUp learn_btn_2'>
                          <Link href="/servicesdetail">Explore Our Services</Link>
                        </div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;