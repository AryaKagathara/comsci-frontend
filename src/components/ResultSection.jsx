import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";
import CountUp from 'react-countup';



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
								<CountUp start={0} end={99} duration={15} suffix="%" />
								<h5>Customer satisfaction</h5>
							</div>
							<div className="result_textbox">
								<CountUp start={0} end={32} duration={15} suffix="M" />
								<h5>Active users</h5>
							</div>
							<div className="result_textbox">
								<CountUp start={0} end={51} duration={15} suffix="+" />
								<h5>Team members</h5>
							</div>
							<div className="result_textbox">
								<CountUp start={0} end={240} duration={15} suffix="%" />
								<h5>Company growth</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
	
export default ResultSection;