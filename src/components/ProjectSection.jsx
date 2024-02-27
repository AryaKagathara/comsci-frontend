import HomeProjectBox from "@/components/HomeProjectBox";
import ProjectListSection from "@/components/layout/ProjectListSection";
// import PrimaryBtn from '@/components/layout/PrimaryBtn';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ProjectSection = (props) => {
	useEffect(() => {
		gsap.set(".fadeInUp", { y: "30%", opacity: 0, });
		ScrollTrigger.batch(".fadeInUp", {
			onEnter: batch => gsap.to(batch, { opacity: 1, duration: .8, delay: 0.5, stagger: 0.2, y: 0 }),
		});
	}, []);

	return (
		<>
			<div className="project">
				<div className="container">
					<div className="project_section">
						<HomeProjectBox title={props?.projectTitle} buttonName={props?.projectButtonName} />
						<div className="projectlist_section">
							<div className="row">
								{
									(props?.selectProject?.length > 0) &&
									props.selectProject.map((project, index) =>
									(
										<div className="col-lg-6 col-md-6" key={index}>
											<ProjectListSection projectDetails={project} />
										</div>
									)
									)
								}
							</div>
						</div>
						{/* <div className="projectbtn_wrap">
							<PrimaryBtn name={props?.projectButtonName?.title} arrow="no" link={props?.projectButtonName?.url} />
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectSection;