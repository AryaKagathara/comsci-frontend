import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/comsci-logo.webp";
import PrimaryBtn from '@/components/layout/PrimaryBtn';




const HomeBanner = () => {
	return (
		<>
			<div class="banner">
				<div class="banner_bg_img">
					<Image src={} alt="" />
				</div>
				<div class="container">
					<div class="banner_textbox">
						<span>Design & Development company</span>
						<h1>We help business evolve</h1>
						<PrimaryBtn name="Learn Now" arrow="yes"/>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;