import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";
import Accordion from 'react-bootstrap/Accordion';



const Faqsection = () => {
	return (
		<>
			<div className="faq">
				<div className="container">
					<div className="faq_section">
						<div className="text_box">
							<h4>Design and development questions</h4>
							<ContentBox text="Our creative web design agency based in london crafts custom sites that are easy on the eyes responsive and well - optimized for user experience." />
						</div>
						<Accordion>
							<Accordion.Item eventKey="5">
								<Accordion.Header>What types of website do you build?</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="6">
								<Accordion.Header>How long does it take to build a website?</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="7">
								<Accordion.Header>Where is your digital agency/web designer based?</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="8">
								<Accordion.Header>Which industries do you work with?</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="9">
								<Accordion.Header>How to create a good website?</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="10">
								<Accordion.Header>Why should i hire a website agency?</Accordion.Header>
								<Accordion.Body>Bachelor's degree in Computer Science, Information Technology, or a similar field.In-depth knowledge of JavaScript, CSS, HTML and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.Experience with user interface design.Knowledge of performance testing frameworks including Mocha and Jest.Experience with browser-based debugging and performance testing software.Excellent troubleshooting skills.Good project management skills.</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</div>
		</>
	)
}

export default Faqsection;