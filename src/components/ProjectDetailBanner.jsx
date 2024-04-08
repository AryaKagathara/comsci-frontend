import Image from "next/image";

const ProjectDetailBanner = (props) => {
	return (
		<>
			<div className="project_detail_banner">
				<div className="detail_banner">
					{
						(props?.bannerImage != null) &&
						<Image src={props?.bannerImage} alt="ProjectDetail1" width={props?.bannerImageDetails?.width} height={props?.bannerImageDetails?.height} />
					}

				</div>
			</div>
		</>
	)
}

export default ProjectDetailBanner;