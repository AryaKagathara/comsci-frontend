import Image from "next/image";
import FSC from "@/../public/images/FSC-image.webp";
import Homedetail from "@/../public/images/homedetail-img.webp";

const ImagesWrapper = () => {
	return (
		<>
			<div className="images_wrapper">
				<div className="fsc_img">
					<Image src={FSC} alt="fsc" />
				</div>
				<div className="fsc_img">
					<Image src={Homedetail} alt="fsc" />
				</div>
			</div>
		</>
	)
}

export default ImagesWrapper;