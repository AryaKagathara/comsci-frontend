import Image from "next/image";
import ProjectDetail2 from "@/../public/images/projectdetail-img2.webp";
import ProjectDetail3 from "@/../public/images/projectdetail-img3.webp";
import ProjectDetail4 from "@/../public/images/projectdetail-img4.webp";


const ProjectDetailImage = () => {

	return(
		<>
			<div className="project_imagewrap">
				<div className="images_wrapper_block">
					<Image src={ProjectDetail2} alt="projectdetail2" />
				</div>
				<div className="images_wrapper_block">
					<Image src={ProjectDetail3} alt="projectdetail3" />
				</div>
				<div className="images_wrapper_block">
					<Image src={ProjectDetail4} alt="projectdetail4" />
				</div>
			</div>
		</>
	)
}

export default ProjectDetailImage;