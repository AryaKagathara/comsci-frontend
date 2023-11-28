import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";
import Accordion from 'react-bootstrap/Accordion';


const JobpositionSection = () => {
	return (
		<>
			<div className="jobposition">
				<div className="container" data-scroll data-scroll-speed=".2">
					<div className="jobposition_section">
						<div className="text_box">
							<h4>Job Position</h4>
							<ContentBox text="Job positions are important help employees understand their roles and responsibilities, allow for the proper allocation of tasks and resources, and facilitate the recruitment and selection process when hiring new personnel" />
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