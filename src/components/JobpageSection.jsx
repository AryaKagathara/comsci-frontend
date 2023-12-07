import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";
import Accordion from 'react-bootstrap/Accordion';


const JobpositionSection = () => {
	return (
		<>
			<div className="jobposition">
				<div className="container">
					<div className="jobposition_section">
						<div className="text_box">
							<h4>Job Position</h4>
							<div className="connect_box">
								<ContentBox text="We’re on the lookout for people who want to create. We build actionable plans, innovative experiences and use our creative talent to execute a bold vision – on time, on budget and on point. If this sounds like something that’s up your alley, have a look-see at your potential dream job. Don't see the position you’re looking for? Get in touch anyway." />
								<Link href="#">Connect with us</Link>
							</div>
						</div>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header>Front End Developer</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>UI/UX Designer</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>Backend Developer jobs</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>Unity Game developer</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header>Business Development Manager</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</div>
		</>
	)
}

export default JobpositionSection;