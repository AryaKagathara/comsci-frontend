import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";

const Technologies = (props) => {

	// console.log('props:', props);

	return (
		<>
			<div className="technologies">
				<div className="container">
					<div className="tech_section" data-scroll data-scroll-speed=".2">
						<div className="text_box fadeInUp">
							<ContentBox title={props?.technologieTitle} text={props?.technologieDescription} />
						</div>
						<div className="technologie_images">
							<div className="row">
								{
									(props?.technologiesLogos?.length > 0) &&
									props.technologiesLogos.map((tech, index) => (
										<div className="col-xl-3 col-6 col-md-6 col-lg-4" key={index}>
											<div className="images_box">
												<div className="wrapper_box">
													<div className="picture">
														<Image src={tech?.technologieLogos?.sourceUrl} alt={tech?.technologieLogos?.altText} width={tech?.technologieLogos?.mediaDetails?.width} height={tech?.technologieLogos?.mediaDetails?.height} />
													</div>
												</div>
											</div>
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

export default Technologies;