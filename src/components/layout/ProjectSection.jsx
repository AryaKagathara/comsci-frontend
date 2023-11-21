import Link from "next/link";
import Image from "next/image";
import Award from "@/assets/images/award-img.webp";
import HomeProjectBox from "@/components/HomeProjectBox";
import ProjectListSection from "@/components/ProjectListSection";



const ProjectSection = () => {
	return (
		<>
			<div className="project">
				<div className="container">
					<div className="project_section">
						<HomeProjectBox />
						<div className="projectlist_section">
							<div className="row">
								<div className="col-lg-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6">
									<ProjectListSection />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectSection;