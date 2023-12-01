import Link from "next/link";
import Image from "next/image";
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
								<h5>99%</h5>
								<span>Customer satisfaction</span>
							</div>
							<div className="result_textbox">
								<h5>32M</h5>
								<span>Active users</span>
							</div>
							<div className="result_textbox">
								<h5>51+</h5>
								<span>Team members</span>
							</div>
							<div className="result_textbox">
								<h5>240%</h5>
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