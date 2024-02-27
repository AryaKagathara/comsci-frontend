import Image from "next/image";

const AwardType = (props) => {
	return (
		<>
			<div className="awardtype">
				<div className="container">
					<div className="type_section">
						<ul>
							{(props?.logos?.length > 0) &&
								props?.logos.map((logo, index) => {
									return (
										<li key={index}><Image src={logo?.awardLogoImage?.sourceUrl} alt={logo?.awardLogoImage?.altTexts} width={274} height={186} /></li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default AwardType;