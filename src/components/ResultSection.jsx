import ContentBox from "@/components/layout/ContentBox";

const ResultSection = (props) => {
	return (
		<>
			<div className="result">
				<div className="container">
					<div className="result_wrap">
						<div className="result_content">
							{
								(props?.title != null) &&
								<ContentBox title={props?.title} />
							}
						</div>
						<div className="result_detail">
							{
								(props?.metaData.length > 0) &&
								props?.metaData.map((metaData, index) => (
									<div className="result_textbox" key={index}>
										{
											(metaData?.orMetaNumberText != null) &&
											<h4>{metaData?.orMetaNumberText}</h4>
										}
										{
											(metaData?.orMetaTitle != null) &&
											<span>{metaData?.orMetaTitle}</span>
										}
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

export default ResultSection;