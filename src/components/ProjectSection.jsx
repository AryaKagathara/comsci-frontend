import Link from "next/link";
import Image from "next/image";
import HomeProjectBox from "@/components/HomeProjectBox";
import ProjectListSection from "@/components/layout/ProjectListSection";
import PrimaryBtn from '@/components/layout/PrimaryBtn';


const ProjectSection = () => {
	return (
		<>
			<div className="project">
				<div className="container">
					<div className="project_section">
						<HomeProjectBox />
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
							</div>
						</div>
						<div className="projectbtn_wrap">
							<PrimaryBtn name="View more" arrow="no" link="/project" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectSection;