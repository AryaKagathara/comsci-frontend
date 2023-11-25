import Link from "next/link";
import Image from "next/image";





const AboutSection = () => {
	return (
		<>
			<div className="aboutus">
				<div className="container">
					<div className="about_section">
						<div className="titlebox">
							<span>Our Mission</span>
							<h4>We help ecommerce evolve by delivering smart, efficient, and appealing solutions to digital challenges of new and mature retail and wholesale businesses.</h4>
						</div>
						<div className="aboutstep_box">
							<div className="content_box">
								<div className="number_box">
									<p>01.</p>
								</div>
								<span>It’s the commitment to deliver decent results to our customers. We have zero tolerance for subpar output, undependability risks, and shared responsibility. Besides, it is our strategic imperative to accumulate and retain technological and domain expertise in the house. Hence, we never outsource.</span>
							</div>
							<div className="content_box">
								<div className="number_box">
									<p>02.</p>
								</div>
								<span>It’s the people that stand behind each project that we undertake. We believe that personal relationships drive the success of our endeavors, and that is why we take it a step further to keep a personalized approach to every customer with the entire team being involved beyond development.</span>
							</div>
							<div className="content_box">
								<div className="number_box">
									<p>03.</p>
								</div>
								<span>It’s the impact that drives our team and gives our work meaning. Staylime does not miss the mark on addressing why we’re doing things — eventually, the reasoning behind our work shapes how it’s done, and the latter defines the impact that solutions delivered by us will make.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutSection;