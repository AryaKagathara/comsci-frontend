import Link from "next/link";
import Image from "next/image";
import Winner from "@/../public/images/winner-of-the-contest.webp";
import DesignAward from "@/../public/images/design-award-winner.webp";
import Expert from "@/../public/images/expert-img.webp";
import StarAgency from "@/../public/images/5-star-agency.webp";
import Professionals from "@/../public/images/a1-professionals.webp";


const AwardType = () => {
	return (
		<>
			<div className="awardtype">
				<div className="container">
					<div className="type_section">
						<ul>
							<li><Image src={Winner} alt="Winner" /></li>
							<li><Image src={DesignAward} alt="DesignAward" /></li>
							<li><Image src={Expert} alt="Expert" /></li>
							<li><Image src={StarAgency} alt="StarAgency" /></li>
							<li><Image src={Professionals} alt="Professionals" /></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default AwardType;