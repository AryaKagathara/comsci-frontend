import HomeProjectBox from "@/components/HomeProjectBox";
import ProjectListSection from "@/components/layout/ProjectListSection";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ProjectSection = () => {

	useEffect(() => {
		gsap.set(".fadeInUp", {y: "30%", opacity: 0,});
		ScrollTrigger.batch(".fadeInUp", {
			onEnter: batch => gsap.to(batch, {  opacity: 1, duration: .8, delay:0.5, stagger: 0.2, y:0}),
		});
	}, []);

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