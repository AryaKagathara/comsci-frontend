import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StrategySection = (props) => {
	useEffect(() => {
		const sections = gsap.utils.toArray(".content_box");

		sections.forEach(elem => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: elem,
					scrub: true,
					start: "top center",
					end: 'bottom top',
					toggleClass: 'highlight',
				},
			});
		});
		gsap.to(".timeline-line .line-fill", {
			height: '100%',
			ease: 'linear',
			scrollTrigger: {
				trigger: ".strategy_section",
				scrub: true,
				start: "top center",
				end: 'bottom center',
			}
		});
	}, []);

	return (
		<>
			<div className="strategy">
				<div className="container">
					<div className="strategy_section">
						<div className="row">
							<div className="col-lg-5">
								<div className="text_section fadeInUp">
									<h3>{props?.strategyTitle}</h3>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1">
								<div className="strategy_step">
									<div className="step_box">
										{
											(props?.strategySection?.length > 0) && // Check if props.strategySection has elements
											props.strategySection.map((meta, index) => {
												return (
													<div className="image_content" key={index}>
														<div className="img_box">
															<Image src={meta?.straImage?.sourceUrl} alt={meta?.straImage?.altText} height={80} width={80} />
														</div>
														<div className="content_box">
															<span>{meta?.straTitle}</span>
															<p>{meta?.straDescription}</p>
														</div>
													</div>
												);
											})
										}

									</div>
									<div className="timeline-line">
										<div className="line-default"></div>
										<div className="line-fill"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default StrategySection;