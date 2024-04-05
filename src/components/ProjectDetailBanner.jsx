import Image from "next/image";
import ProjectDetail1 from "@/../public/images/projectdetail-banner.webp"


const ProjectDetailBanner = () => {

	return (
		<>
			<div className="project_detail_banner">
				<div className="detail_banner">
					<Image src={ProjectDetail1} alt="ProjectDetail1" fill={true} sizes="(max-width: 767px) 50vw, (max-width: 1200px) 50vw, 33vw" />
				</div>
			</div>
		</>
	)
}

export default ProjectDetailBanner;