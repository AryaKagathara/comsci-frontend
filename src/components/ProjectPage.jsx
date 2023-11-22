import Link from "next/link";
import Image from "next/image";
import ProjectListSection from "@/components/layout/ProjectListSection";



const ProjectPage = () => {
	return (
		<>
			<div className="project">
				<div className="container">
					<div className="project_section">
						<div className="project_title">
							<h4>You can also view our past projects.</h4>
						</div>
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

export default ProjectPage;