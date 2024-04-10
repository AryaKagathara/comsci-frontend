import ContentBox from "@/components/layout/ContentBox";

const AboutSection = (props) => {
	return (
		<>
			<div className="aboutus">
				<div className="container">
					<div className="about_section">
						<div className="titlebox">
							{
								(props?.shortTitle != null) &&
								<span>{props?.shortTitle}</span>
							}
							{
								(props?.title != null) &&
								<ContentBox title={props?.title} />
							}
						</div>
						<div className="aboutstep_box">
							{
								(props?.metaData.length > 0) &&
								props?.metaData.map((metaData, index) => (
									<div className="content_box" key={index}>
										<div className="number_box">
											<p>{metaData?.apMetaNumber}.</p>
										</div>
										<span>{metaData?.apMetaDescription}</span>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutSection;