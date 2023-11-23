import Link from "next/link";
import Image from "next/image";
import HomeProjectBox from "@/components/HomeProjectBox";
import ProjectListSection from "@/components/layout/ProjectListSection";



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