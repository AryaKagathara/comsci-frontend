import Image from "next/image";
import Business from "@/../public/images/business-img.webp";

const ModernBusiness = () => {
	return (
		<>
			<div className="business">
				<div>
					<div className="business_section">
						<Image src={Business} alt="business" />
					</div>
				</div>
			</div>
		</>
	)
}

export default ModernBusiness;