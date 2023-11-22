import Link from "next/link";
import Image from "next/image";
import project1 from "@/assets/images/project-pic1.webp";




const ProjectListSection = () => {
	return (
		<>
			<Link href="/projectdetail" className="project_wrap">
				<div className="picture">
					<Image src={project1} alt="project" />
				</div>
				<div className="project_wrapper_btn">
					<div className="project_btn">
						View Project
						<span>
							<svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.20361 2.441V0.78125H16.502V11.0717H14.8224V3.61389L1.67322 16.7813L0.501953 15.6084L13.6511 2.441H6.20361Z" fill="white"/>
							</svg>
						</span>
					</div>
				</div>
			</Link>
		</>
	)
}

export default ProjectListSection;