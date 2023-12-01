import Link from "next/link";
import Image from "next/image";
import Share from "@/assets/images/share-img.svg";
import Export from "@/assets/images/export-img.svg";



const ProjectDetailTitle = () => {
	return (
		<>
			<div className="project_titlebox">
				<div className="container">
					<div className="project_titlesection">
						<p>2020</p>
						<span>BLK RESUME</span>
						<div className="imgbox">
							<Link href="#"><Image src={Share} alt="share" /></Link>
							<Link href="#"><Image src={Export} alt="export" /></Link>
						</div>
						<i>When CAMSCI came to us, they were well-established from sea to shining sea. But like a lot of brands, they struggled to balance their long history with engaging new, younger clients.</i>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectDetailTitle;