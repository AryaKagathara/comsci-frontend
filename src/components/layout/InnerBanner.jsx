import Link from "next/link";
import Image from "next/image";
import inner from "@/assets/images/innerbanner-bg.webp";




const InnerBanner = () => {
	return (
		<>
			<div className="innerbanner">
				<div className="innerbanner_bg_img">
					<Image src={inner} alt="Banner" />
				</div>
				<div className="container">
					<div className="innerbanner_textbox">
						<h4>BLK RESUME</h4>
					</div>
				</div>
			</div>
		</>
	)
}

export default InnerBanner;