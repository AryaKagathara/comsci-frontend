import Image from "next/image";
import Link from "next/link";

const HomeBanner = (props) => {
	return (
		<>
			<div className="banner">
				<div className="banner_bg_img">
					<Image src={props?.bannerImage?.sourceUrl} alt={props?.bannerImage?.altText} width={1400} height={700} />
				</div>
				<div className="mobile_banner_img">
					<Image src={props?.bannerImage?.sourceUrl} alt={props?.bannerImage?.altText} width={1400} height={700} />
				</div>
				<div className="container">
					<div className="banner_textbox" data-scroll data-scroll-speed=".2">
						<p className="fadeInUp">{props?.bannerSubTitle}</p>
						<h1 className="fadeInUp">{props?.bannerTitle}</h1>
						<div className='fadeInUp learn_btn_2'>
							<Link href={props?.bannerButton?.url}>{props?.bannerButton?.title}</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;