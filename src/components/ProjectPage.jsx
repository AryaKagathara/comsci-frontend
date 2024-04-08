import ProjectListSection from "@/components/layout/ProjectListSection";
import ContentBox from "@/components/layout/ContentBox";

const ProjectPage = (props) => {
	return (
		<>
			<div className="project">
				<div className="container">
					<div className="project_section">
						<div className="project_title fadeInUp">
							{(props?.projectPageTitle) &&
								< ContentBox title={props?.projectPageTitle} />
							}
						</div>
						<div className="projectlist_section">
							<div className="row">
								{
									(props?.projectDetails?.nodes.length > 0) &&
									props.projectDetails.nodes.map((project, index) => (
										<div className="col-lg-6 col-md-6" key={index}>
											<ProjectListSection projectDetails={project} />
										</div>
									))
								}							
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectPage;