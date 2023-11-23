import Link from "next/link";
import Image from "next/image";
import FSC from "@/assets/images/FSC-image.webp";



const ImagesWrapper = () => {
	return (
		<>
			<div className="images_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="fsc_img">
								<Image src={FSC} alt="fsc" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="fsc_img">
								<Image src={FSC} alt="fsc" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ImagesWrapper;