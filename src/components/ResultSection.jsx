import ContentBox from "@/components/layout/ContentBox";

const ResultSection = () => {
	return (
		<>
			<div className="result">
				<div className="container">
					<div className="result_wrap">
						<div className="result_content">
							<ContentBox title="Our results in numbers" />
						</div>
						<div className="result_detail">
							<div className="result_textbox">
								<h4>99%</h4>
								<span>Customer satisfaction</span>
							</div>
							<div className="result_textbox">
								<h4>32M</h4>
								<span>Active users</span>
							</div>
							<div className="result_textbox">
								<h4>51+</h4>
								<span>Team members</span>
							</div>
							<div className="result_textbox">
								<h4>240%</h4>
								<span>Company growth</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
	
export default ResultSection;