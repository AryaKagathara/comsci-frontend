import ProjectListSection from "@/components/layout/ProjectListSection";
import ContentBox from "@/components/layout/ContentBox";


const ProjectPage = () => {
	return (
		<>
			<div className="project">
				<div className="container">
					<div className="project_section">
						<div className="project_title fadeInUp">
							<ContentBox title="Browse our portfolio for a glimpse into our past work." />
						</div>
						<div className="projectlist_section">
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
									<ProjectListSection />
								</div>
								<div className="col-lg-6 col-md-6">
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