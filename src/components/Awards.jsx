import Link from "next/link";
import Image from "next/image";
import Award from "@/assets/images/award-img.webp";




const Awards = () => {
	return (
		<>
			<div className="award">
				<div className="container">
					<div className="award_section">
						<div className="image">
							<Image src={Award} alt="Award" />
						</div>
						<div className="award_text">
							<h2>Award Winning Company</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Awards;